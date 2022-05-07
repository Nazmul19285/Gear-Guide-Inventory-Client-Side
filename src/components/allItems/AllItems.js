import useItems from '../../hooks/useItems';
import ShowItems from '../showItem/ShowItems';

const AllItems = () => {
    const [allItems] = useItems();
    return (
        <div className='lg:grid lg:grid-cols-3 lg:gap-4'>
            {
                allItems.map(item => <ShowItems key={item._id} item={item}></ShowItems>)
            }
        </div>
    );
};

export default AllItems;