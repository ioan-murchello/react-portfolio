const List = ({list, title}) => {
  return (
    <ul className='flex gap-x-3 flex-wrap'>
        {title}
        {list && list.map(item => {
            return <li className='flex items-center gap-x-2 capitalize'>{item.icon}{item.title}</li>;
        })}
    </ul>
  );
}
export default List