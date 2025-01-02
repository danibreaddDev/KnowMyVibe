type Props = {
    title: string
}
export const Title = ({title}: Props) => {
  return (
    <div
      className="flex items-center space-x-2 py-3 px-2 bg-white border rounded-es-none rounded-full w-fit"
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-8 fill-slate-600" viewBox="0 0 24 24"><path d="M17 16q-1.25 0-2.125-.875T14 13t.875-2.125T17 10t2.125.875T20 13t-.875 2.125T17 16m-6 7v-2.9q0-.525.25-.987t.7-.738q.8-.475 1.688-.788t1.812-.462L17 19l1.55-1.875q.925.15 1.8.463t1.675.787q.45.275.713.738T23 20.1V23zm-2-2.9v.9H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v5q-.775-.975-1.75-1.487T17 8V7H7v2h7q-.5.4-.9.9t-.675 1.1H7v2h5q0 .525.113 1.025t.312.975H7v2h3.45q-.675.575-1.062 1.388T9 20.1"/></svg>
      <h1 className=" text-slate-500 font-semibold text-lg">{title}</h1>
    </div>
  );
};
