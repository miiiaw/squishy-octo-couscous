import NavBar from "./NavBar";

export default function Layout({ children }) {
    return(
        <>
        <div id="container">
            <NavBar />
            <main>
                {children}
            </main>
            <footer>
                This is the footer. Yay.
            </footer>
        </div>
        </>
    )
}