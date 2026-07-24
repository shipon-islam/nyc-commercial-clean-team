import PageForm from "@/components/dashboard/pages/PageForm";
import { getPageById } from "@/utility/getPages";
import { getPageNames } from "@/utility/pageName";

export default async function PageEdit({ params }) {
  const { id } = await params;
  const pageNamesData = await getPageNames();
  const pageData = await getPageById(id);
  const pageNames = pageNamesData.map((item) => item.slug);
  return (
    <div>
      <PageForm pagesData={pageData} pageNames={pageNames} />
    </div>
  );
}
