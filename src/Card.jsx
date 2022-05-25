export default function Card(props) {
return (
<div className="relative p-6 mx-4 lg:p-8 lg:mx-96 bg-darkGreyBlue rounded-xl ">
    <h5 class="text-[.65rem] py-6 tracking-[.25rem] font-manrope uppercase text-neonGreen text-center">Advice #{props.id}</h5>
    <p className="pb-6 text-[1.5rem] font-manrope text-lightCyan align-middle text-center">"{props.advice}"</p>
    <svg className="block m-auto " width="295" height="16" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
            <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
            </g>
        </g>
    </svg>
    <div className="pb-6"></div>
    <button type="button" onClick={props.onClick} className="transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 hover:bg-neonGreen duration-500 absolute left-1/2 -translate-x-1/2 bg-neonGreen hover:ring-4 hover:ring-neonGreen rounded-full p-4">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
        </svg>
    </button>
</div>
)
}