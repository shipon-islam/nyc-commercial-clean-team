"use client";

import Button from "@/components/Button";
import InputBox from "@/components/InputBox";
import SelectBox from "@/components/SelectBox";
import { pageYupSchema } from "@/yup/pageYupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
const defaultStats = [
  { id: "10001", title: "PROJECTS COMPLETED", number: "200", suffix: "+" },
  { id: "10002", title: "FAST QUOTING", number: "24", suffix: "Hrs" },
  { id: "10003", title: "LICENSED & INSURED", number: "100", suffix: "%" },
  { id: "10004", title: "HAPPY CUSTOMERS", number: "98", suffix: "%" },
];
export default function PageForm({ pagesData, pageNames }) {
  const [loading, setLoading] = useState(false);
  const beforeRef = useRef(null);
  const afterRef = useRef(null);
  const [isRefresh, setIsRefresh] = useState(false);
  const [feature, setFeature] = useState("");
  const [compareCard, setCompareCard] = useState({
    title: "",
    beforeImage: "",
    afterImage: "",
  });

  const [stats, setStats] = useState({
    title: "",
    number: "",
    suffix: "",
  });

  const [features, setFeatures] = useState(pagesData?.features || []);
  const [comparedList, setComparedList] = useState(pagesData?.facilities || []);
  const [statsList, setStatsList] = useState(pagesData?.stats || []);
  const [bannerImage, setBannerImage] = useState(pagesData?.bannerImage || "");

  const path = usePathname();
  const isEdit = path.includes("edit");
  const router = useRouter();

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pageName: pagesData?.pageName || "",
      title: pagesData?.title || "",
      subTitle: pagesData?.subTitle || "",
      shortDescription: pagesData?.shortDescription || "",
    },
    resolver: yupResolver(pageYupSchema()),
  });

  //for submitting the form
  const onSubmit = async (e) => {
    console.log(e);
    const formData = new FormData();
    formData.append("pageName", e.pageName);
    formData.append("title", e.title);
    formData.append("subTitle", e.subTitle);
    formData.append("shortDescription", e.shortDescription);

    if (comparedList.length === 0)
      return toast.error("Compare list is required");

    formData.append("facilities", JSON.stringify(comparedList));

    if (statsList.length === 0) return toast.error("Stats is required");

    formData.append("stats", JSON.stringify(statsList));

    if (features.length === 0) return toast.error("Features are required");

    formData.append("features", JSON.stringify(features));

    if (!bannerImage) return toast.error("Banner Image is required");

    formData.append("bannerImage", bannerImage);

    setLoading(true);

    if (isEdit) {
      try {
        const res = await fetch(`/api/pages/${pagesData?._id}`, {
          method: "PUT",
          body: formData,
        });
        const data = await res.json();
        if (data) {
          reset();
          setLoading(false);
          setIsRefresh(!isRefresh);
          toast.success("Page updated successfully!");
          router.push("/dashboard/pages");
        }
      } catch (error) {
        toast.error(error.message);
        console.error("Error updating blog:", error);
      }
    } else {
      try {
        const res = await fetch("/api/pages", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (res.ok) {
          reset();
          setStatsList([]);
          setFeatures([]);
          setComparedList([]);
          setBannerImage("");
          setLoading(false);
          toast.success("Page created successfully!");
          // router.push("/dashboard");
        } else {
          setLoading(false);
          toast.error(data?.error || "Page creation failed");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error(error.message);
      }
    }
  };

  const removeImage = async (image) => {
    if (!image) {
      return toast.error("Image are missing!");
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    try {
      const res = await fetch(`/api/image-uploader`, {
        method: "DELETE",
        body: formData,
      });
      const deletedImg = await res.json();
      console.log(deletedImg);
      setLoading(false);
      setBanner("");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const imageUpload = async (file) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    setLoading(true);
    try {
      const res = await fetch("/api/image-uploader", {
        method: "POST",
        body: formData,
      });
      const imageUrl = await res.json();
      setLoading(false);
      return imageUrl.image;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleCamparedCard = async () => {
    const { title, afterImage, beforeImage } = compareCard;
    if (!title || !afterImage || !beforeImage) {
      return toast.error("Title, before or after image may be missing !");
    }
    const afterImageU = await imageUpload(afterImage);
    const beforeImageU = await imageUpload(beforeImage);
    setComparedList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        title,
        afterImage: afterImageU,
        beforeImage: beforeImageU,
      },
    ]);
    afterRef.current.value = "";
    beforeRef.current.value = "";
    setCompareCard({ id: "", title: "", beforeImage: "", afterImage: "" });
  };

  //handle banner image
  const handleBannner = async (e) => {
    const file = e.target.files[0];
    if (bannerImage) {
      await removeImage(bannerImage);
    }
    const image = await imageUpload(file);
    setBannerImage(image);
  };
  return (
    <div className="md:w-4/5 mx-auto">
      {loading && (
        <div className="bg-black/50 w-full h-full fixed top-0 left-0 z-10 flex items-center justify-center">
          <span className="h-20 w-20 bg-transparent block rounded-full border-red border-y-4 animate-spin"></span>
        </div>
      )}
      <div className="mt-10">
        <div className="flex justify-between mt-8">
          <h1 className="text-2xl font-bold">
            {isEdit ? "Update" : "Create"} new page
          </h1>
          <Link
            className="bg-slate text-white px-4 py-2 rounded-xl"
            href="/dashboard/pages"
          >
            {" "}
            See Pages
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 mt-8"
          action="#"
        >
          <div className="grid grid-cols-2 gap-4">
            <Controller
              name="pageName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <SelectBox
                  label="Page Name"
                  placeholder="Select Page Name"
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  required
                  options={pageNames}
                  error={errors?.pageName?.message}
                />
              )}
            />

            <InputBox
              label="Title"
              required={true}
              error={errors.title?.message}
              {...register("title")}
            />
            <InputBox
              label="SubTitle"
              required={true}
              error={errors.subTitle?.message}
              {...register("subTitle")}
            />
            <InputBox
              label="Short Description"
              required={true}
              error={errors?.shortDescription?.message}
              {...register("shortDescription")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div>
                <label htmlFor="" className="mb-4 block">
                  Banner Image:
                </label>
                <input
                  type="file"
                  onChange={handleBannner}
                  className="border border-gray-500 p-4 rounded-md accent-amber-50 w-full block"
                />
              </div>
              <div className="mt-6">
                <h5>Banner preview</h5>
                <div className="min-h-30 bg-gray-200  rounded-xl mt-4 p-4">
                  {bannerImage && (
                    <div className="relative w-fit">
                      <Image
                        src={`/api/uploads/page/${bannerImage}`}
                        alt="s"
                        width={200}
                        height={200}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          removeImage(bannerImage);
                          setBannerImage("");
                        }}
                        className="absolute -top-2.5 -right-2  text-slate hover:text-red"
                      >
                        <Icon
                          icon="material-symbols-light:close"
                          width={17}
                          height={17}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <InputBox
                    label="Key Features"
                    required={true}
                    value={feature}
                    onChange={(e) => {
                      setFeature(e.target.value);
                    }}
                  />
                </div>

                <Button
                  name={"Add"}
                  onClick={() => {
                    if (!feature) return;
                    setFeatures((prev) => [
                      ...prev,
                      {
                        id: uuidv4(),
                        name: feature,
                      },
                    ]);
                    setFeature("");
                  }}
                  type="button"
                  className="bg-slate text-white rounded-xl  w-fit ml-auto py-3"
                />
              </div>
              <div className="mt-6">
                <h5>Feature Review</h5>
                <ul className="bg-gray-200 min-h-30 py-1 px-2 rounded-md mt-4 flex items-start flex-wrap gap-2">
                  {features.map((item) => (
                    <li
                      key={item.id}
                      className="text-slate mt-2 text-sm bg-gray-300 py-1 px-2 rounded-lg relative"
                    >
                      {item.name}
                      <button
                        type="button"
                        onClick={() =>
                          setFeatures((prev) =>
                            prev.filter((f) => f.id !== item.id),
                          )
                        }
                        className="absolute -top-2 -right-1  text-slate hover:text-red"
                      >
                        <Icon
                          icon="material-symbols-light:close"
                          width={17}
                          height={17}
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* compare image card start */}
          <div>
            <h5 className="mt-8 mb-4 text-blue-500">Compare working card-</h5>
            <div className="grid grid-cols-3 gap-4">
              <InputBox
                label="Title"
                required={true}
                value={compareCard.title}
                onChange={(e) =>
                  setCompareCard((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              <div>
                <label htmlFor="" className="mb-1 block">
                  Before Image:
                </label>
                <input
                  type="file"
                  className="mt-4 border border-gray-500 py-3.5 pl-4 pr-2 rounded-[20px] accent-amber-50 w-full block"
                  ref={beforeRef}
                  onChange={(e) =>
                    setCompareCard((prev) => ({
                      ...prev,
                      beforeImage: e.target.files[0],
                    }))
                  }
                />
              </div>
              <div>
                <label htmlFor="" className="mb-1 block">
                  After Image:
                </label>
                <input
                  type="file"
                  ref={afterRef}
                  className="mt-4 border border-gray-500 py-3.5 pl-4 pr-2 rounded-[20px] accent-amber-50 w-full block"
                  onChange={(e) =>
                    setCompareCard((prev) => ({
                      ...prev,
                      afterImage: e.target.files[0],
                    }))
                  }
                />
              </div>
            </div>
            <Button
              name={"Add"}
              type="button"
              className="bg-slate text-white rounded-xl  w-fit ml-auto py-3 block mt-2"
              onClick={handleCamparedCard}
            />
            <div className="w-full grid grid-cols-4 gap-2 min-h-30 bg-gray-200 rounded-xl mt-4 p-4">
              {comparedList.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-sm w-fit p-1 relative"
                >
                  <div className="grid grid-cols-2">
                    <Image
                      src={`/api/uploads/page/${item.beforeImage}`}
                      alt="before-image"
                      width={200}
                      height={200}
                      className="object-cover w-30 h-40"
                    />
                    <Image
                      src={`/api/uploads/page/${item.afterImage}`}
                      alt="after-image"
                      width={200}
                      height={200}
                      className="object-cover w-30 h-40"
                    />
                  </div>
                  <p className="text-xs text-center">{item.title}</p>
                  <button
                    type="button"
                    onClick={async () => {
                      await removeImage(item.afterImage);
                      await removeImage(item.beforeImage);
                      setComparedList((prev) =>
                        prev.filter((f) => f.id !== item.id),
                      );
                    }}
                    className="absolute -top-3 -right-3  text-slate hover:text-red"
                  >
                    <Icon
                      icon="material-symbols-light:close"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* stats start */}
          <div>
            <div className="mt-8 mb-4 flex items-center justify-between">
              <h5 className=" text-blue-500">Stats section-</h5>{" "}
              <div className="flex gap-1">
                <input
                  type="checkbox"
                  id="stats"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setStatsList(defaultStats);
                    } else {
                      setStatsList([]);
                    }
                  }}
                />
                <label htmlFor="stats">Default</label>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <InputBox
                label="Title"
                required={true}
                value={stats.title}
                onChange={(e) =>
                  setStats((prev) => ({ ...prev, title: e.target.value }))
                }
              />
              <InputBox
                label="Number"
                type="number"
                min="0"
                required={true}
                value={stats.number}
                onChange={(e) =>
                  setStats((prev) => ({ ...prev, number: e.target.value }))
                }
              />
              <InputBox
                label="Suffix"
                required={true}
                value={stats.suffix}
                onChange={(e) =>
                  setStats((prev) => ({ ...prev, suffix: e.target.value }))
                }
              />
            </div>
            <Button
              name={"Add"}
              type="button"
              className="bg-slate text-white rounded-xl  w-fit ml-auto py-3 block mt-2"
              onClick={() => {
                setStatsList((prev) => [
                  ...prev,
                  {
                    id: uuidv4(),
                    ...stats,
                  },
                ]);
                setStats({
                  title: "",
                  number: "",
                  suffix: "",
                });
              }}
            />
            <div className="grid grid-cols-4 gap-2 w-full h-30 bg-gray-200 rounded-xl mt-4 p-3">
              {statsList.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-300 flex flex-col items-center justify-center rounded-xl relative"
                >
                  <h5 className="text-2xl text-red">
                    {item.number}
                    {item.suffix}
                  </h5>
                  <p>{item.title}</p>
                  <button
                    type="button"
                    onClick={() =>
                      setStatsList((prev) =>
                        prev.filter((f) => f.id !== item.id),
                      )
                    }
                    className="absolute -top-2 -right-1  text-slate hover:text-red"
                  >
                    <Icon
                      icon="material-symbols-light:close"
                      width={17}
                      height={17}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          {isEdit ? (
            <Button
              name={loading ? "Updating..." : "Update"}
              className="bg-blue-600! text-white rounded-lg  w-fit ml-auto block"
            />
          ) : (
            <Button
              name={loading ? "Publishing..." : "Publish"}
              className="bg-blue-600! text-white rounded-lg  w-fit ml-auto block"
            />
          )}
        </form>
      </div>
    </div>
  );
}
