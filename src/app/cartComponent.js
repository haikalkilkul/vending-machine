"use client"
import { useState } from 'react';
import Modal from 'react-modal';
import QRCode from 'qrcode.react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function CartComponent({ selectedItems, removeItem }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const totalPrice = selectedItems.reduce((total, item) => total + item.price, 0);
  const formattedPrice = totalPrice.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  return (
    <>
      <div className="w-1/4 bg-gray-100 p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <h2 className="text-lg font-bold mb-2">Selected Items</h2>
          <ul className="list-disc list-inside">
            { selectedItems.map((item, index) => (
              <li key={ index } className="flex items-center">
                <span>{ item.name } - Rp { item.price.toLocaleString('id-ID') }</span>
                <button
                  className="ml-2 text-red-500"
                  onClick={ () => removeItem(index) }
                >
                  Remove
                </button>
              </li>
            )) }
          </ul>
        </div>
        <div className="mt-5">
          <div className="flex justify-between">
            <div>
              <p className="text-lg font-semibold">Total Price:</p>
              <p className="text-2xl font-bold">{ formattedPrice }</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={ openModal }>
              <FontAwesomeIcon icon={faCartShopping} className='pr-2'/>
              Pay
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={ isModalOpen }
        onRequestClose={ closeModal }
        contentLabel="QR Code Modal"
        style={ {
          content: {
            width: '50%',
            height: 'fit-content',
            margin: 'auto',
          },
        } }
      >
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Your Payment</h2>
          <QRCode value={ `Rp ${ totalPrice.toLocaleString('id-ID') }` } size={ 256 } />
          <p className="mt-4">Total Price: Rp { totalPrice.toLocaleString('id-ID') }</p>
        </div>
      </Modal>
    </>
  );
}