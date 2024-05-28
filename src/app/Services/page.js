import Loading from "../component/Loading";

import dynamic from "next/dynamic";
const ServicesPage = dynamic(() => import("./../component/ServicesPage/ServicesPage"), {
  ssr: true,
  loading: () => (
    <div className="" > <Loading/></div>
  ),
});

const page = ()=>{

    return(
      <div>
        <ServicesPage/>
  
</div>
    )
    }
    export default page;