export default function VendingItem({ item, addItem }) {
  const handleClick = () => {
    addItem(item);
  };

  return (
    <>
      <div className="flex flex-col items-center text-center space-y-2 border rounded-lg cursor-pointer select-none p-2" onClick={handleClick}>
        <img src={ item.image } alt={ item.name } className="w-24 h-24 object-contain" draggable="false" />

        <div>
          <p className="font-medium">{ item.name }</p>
          <p className="text-gray-500">Rp { item.price.toLocaleString('id-ID') }</p>
        </div>
      </div>
    </>
  );
}