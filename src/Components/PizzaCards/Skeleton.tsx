import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
    <ContentLoader
        className="offer-menu2-item-single"
        speed={2}
        width={370}
        height={580}
        viewBox="0 0 370 580"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="370" height="280"/>
        <rect x="12" y="395" rx="0" ry="0" width="350" height="90"/>
        <rect x="11" y="291" rx="0" ry="0" width="350" height="41"/>
        <rect x="12" y="342" rx="0" ry="0" width="350" height="41"/>
        <rect x="23" y="512" rx="0" ry="0" width="146" height="26"/>
        <rect x="244" y="504" rx="0" ry="0" width="107" height="46"/>
    </ContentLoader>
)

export default MyLoader