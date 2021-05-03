function Footer() {
    return (
        <footer className="page-footer cyan lighten-3">
            <div className="footer-copyright ">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/Mad-Imp/search-movies">Repo</a>
                </div>
            </div>
        </footer>
    )
}

export {Footer}