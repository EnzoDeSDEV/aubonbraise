export default function Button ({ children, as, type, href, text, className }) {
    return (
        as === 'a' ? (
            <a className={className || "p-4 rounded-4xl "} href={href}>
                {text || children}
            </a>
        ) : (
            <button className={className || "p-4 rounded-4xl "} type={type}>
                {children}
            </button>
        )
    )
}