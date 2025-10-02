import Link from './Link';

function Sidebar() {
    const links=[
        {label: 'Flex', path:'/'},
        {label: 'Grid', path:'/grid'},
        {label:'Animation', path:'/animation'},
        {label:'MediaQuery', path:'/mediaQuery'}
    ];
    const renderedLinks = links.map(link => (
        <Link 
        key={link.path} 
        to={link.path} 
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2">
            {link.label}
        </Link>
    ));
    return (
        <div className="sticky top-0 flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;
