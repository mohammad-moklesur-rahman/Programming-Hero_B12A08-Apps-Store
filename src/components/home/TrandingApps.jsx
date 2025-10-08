import { Suspense } from "react"
import Card from "./Card"


const TrandingApps = () => {
  const fatchDtat = async () => {
    const res = await fetch('/data.json')
    return res.json()
  }
  const fatchPromice = fatchDtat();
  return (
    <>
      <h2 className="text-[48px] font-bold text-[#001931]">Trending Apps</h2>
      <p className="text-[20px] text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
      <div className="container mx-auto">
        <Suspense fallback={<h2>Data is Loading....</h2>}>
          <Card fatchPromice={fatchPromice} />
        </Suspense>
      </div>
    </>
  )
}

export default TrandingApps