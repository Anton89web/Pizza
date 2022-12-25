import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonMenu: React.FC = (props) => (
    <ContentLoader
        style={{margin: 20}}
        speed={2}
        width={550}
        height={100}
        viewBox="0 0 550 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="11" y="291" rx="0" ry="0" width="350" height="41"/>
        <rect x="12" y="342" rx="0" ry="0" width="350" height="41"/>
        <rect x="1" y="48" rx="0" ry="0" width="422" height="49"/>
        <rect x="71" y="1" rx="0" ry="0" width="288" height="30"/>
        <rect x="433" y="65" rx="0" ry="0" width="112" height="30"/>
    </ContentLoader>
)

export default SkeletonMenu;