export default function Section({ children, className, id }) {
    return (
        <section id={id} className={`py-8 px-4 scroll-mt-40 ${className}`}>
            <div className="ml-auto mr-auto w-[80%]">
                {children}
            </div>
        </section>
    )
}