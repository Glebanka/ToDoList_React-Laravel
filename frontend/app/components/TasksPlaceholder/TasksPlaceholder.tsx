import DeleteSVG from "../SVGs/deleteSVG/deleteSVG";
export default function TasksPlaceholder() {
  return (
    <div className='rounded-2xl border-solid border w-11/12 flex flex-col p-4 gap-3 animate-pulse'>
    <strong className='text-3xl'><svg width="239" height="28" viewBox="0 0 239 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="239" height="28" fill="#585858"/></svg></strong>
    <p className='whiteColor'><svg width="136" height="18" viewBox="0 0 239 28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="136" height="18" fill="#585858"/></svg></p> 
    <div className='self-end'>
        <DeleteSVG></DeleteSVG>
    </div>
  </div>
  );
}