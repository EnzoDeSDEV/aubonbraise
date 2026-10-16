export default function Section({ children, className }) {
    return (
        <section className={`py-8 px-4 ${className}`}>
            <div className="ml-auto mr-auto w-[80%]">
                {children}
            </div>
        </section>
    )
}