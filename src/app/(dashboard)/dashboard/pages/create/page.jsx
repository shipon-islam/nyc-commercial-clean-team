import PageForm from "@/components/dashboard/pages/PageForm";
import { getPageNames } from "@/utility/pageName";

export default async function PageCreate() {
const pageNamesData=await getPageNames()
const pageNames=pageNamesData.map(item=>item.slug)
console.log(pageNames)
  return (
    <div>
        <PageForm pageNames={pageNames}/>
    </div>
  )
}
