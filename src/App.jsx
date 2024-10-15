import React, { useEffect, useRef } from 'react';

function App() {
  const cardNumberRef = useRef(null);
  const phoneRef = useRef(null);  
  const cvvRef = useRef(null);
  const expiryDateRef = useRef(null);
  const securityCodeRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    cardNumberRef.current.focus();
  }, []);

  const handleInput = (e, nextRef) => {
    if (e.target.value.length === e.target.maxLength) {
      nextRef.current.focus();
    }
  };

  return (
    <div className="bg-gray-900 flex items-center justify-center h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-right">فرم پرداخت</h2>
        <form className="text-right">
          <div className="mb-6">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300">شماره کارت</label>
            <input
              type="text"
              id="cardNumber"
              ref={cardNumberRef}
              maxLength="16"
              className="placeholder-right mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              onInput={(e) => handleInput(e, phoneRef)}  
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">شماره تلفن</label>
            <input
              type="text"
              id="phoneNumber"
              ref={phoneRef}  
              maxLength="11"
              className="placeholder-right mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              placeholder="0912-345-6789"
              onInput={(e) => handleInput(e, cvvRef)}  
            />
          </div>
          <div className="mb-6">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-300">شماره شناسایی دوم (CVV2)</label>
            <input
              type="text"
              id="cvv"
              ref={cvvRef}
              maxLength="4"
              className="placeholder-right mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              onInput={(e) => handleInput(e, expiryDateRef)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-300">تاریخ انقضا (ماه/سال)</label>
            <input
              type="text"
              id="expiryDate"
              ref={expiryDateRef}
              maxLength="5"
              className="placeholder-right mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              placeholder="MM/YY"
              onInput={(e) => handleInput(e, securityCodeRef)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="securityCode" className="block text-sm font-medium text-gray-300">کد امنیتی</label>
            <input
              type="text"
              id="securityCode"
              ref={securityCodeRef}
              placeholder='کدی که به شماره شما فرستاده شده'
              maxLength="6"
              className="placeholder-right mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              onInput={(e) => handleInput(e, emailRef)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">ایمیل</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="placeholder-right mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
            />
          </div>
          <div className="flex items-center mb-6">
            <input id="saveCard" type="checkbox" className="h-5 w-5 text-indigo-600 border-gray-700 rounded" />
            <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-300">ذخیره کارت برای استفاده‌های بعدی</label>
          </div>
          <div className="flex justify-between">
            <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded ml-3">انصراف</button>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded">پرداخت</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
