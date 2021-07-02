import Link from 'next/link'
const ActiveResource = () => {
    return (
        <div className="active-resource">
            <h1 className="resource-name">My active Resouce</h1>
            <div className="time-wrapper">
                <h2 className="elapsed-time">
                    1,400
                </h2>
            </div>
            <Link href="/">
                <a className="button">Go to resource</a>
            </Link>
        </div>
    )
}

export default ActiveResource