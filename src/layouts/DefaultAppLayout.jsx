const DefaultAppLayout = ({children}) => {
    return ( 
        <div className="h-[100vh] bg-[#0c0c0c] overflow-y-auto text-[#ffff]">
            {children}
        </div>
     );
}
 
export default DefaultAppLayout;