import { IoMdCloudDownload } from "react-icons/io"

const DownloadCV = () => {
  return (
<button
  className="cursor-pointer group/download relative flex items-center gap-2 px-8 py-4 bg-[#ffc75d] text-[#111] rounded-full hover:bg-opacity-70 font-semibold text-xl shadow-xl active:shadow-inner transition-all duration-300"
>
<IoMdCloudDownload className="text-3xl" />
  Download
  <div
    className="absolute text-xs uppercase scale-0 rounded-md py-2 px-2 bg-[#ffc75d] left-2/4 mb-3 bottom-full group-hover/download:scale-100 origin-bottom transition-all duration-300 shadow-lg before:content-[''] before:absolute before:top-full before:left-2/4 before:w-3 before:h-3 before:border-solid before:bg-[#ffc75d] before:rotate-45 before:-translate-y-2/4 before:-translate-x-2/4"
  >
    588kb
  </div>
</button>


  )
}

export default DownloadCV