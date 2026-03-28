const SideBar = () =>
{
    return(
         <aside className="w-1/5 bg-gray-200 p-4">
          <h2 className="font-bold mb-2">Sidebar</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
          </ul>
        </aside>
    )
}
export default SideBar;