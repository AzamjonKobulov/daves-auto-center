import React from 'react';
import Button from '../../shared/Button';

const CustomerReviews = () => {
  return (
    <div className="space-y-8">
      <h2>Customer reviews</h2>

      <div className="flex  items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <p className="font-bold text-17">5.0</p>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg
                  key={idx}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                    fill="#FFC700"
                  />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-sm text-brand-gray/50">Based on 2 reviews</p>
        </div>
        <Button
          blackBordered
          className="h-10 lg:h-11 rounded-md text-sm lg:text-17 px-2.5 lg:px-8"
        >
          Write a review
        </Button>
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center">
            <p className="text-17 text-brand-dark font-bold">5</p>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0003 17.77L16.1503 20.28C16.9103 20.74 17.8403 20.06 17.6403 19.2L16.5403 14.48L20.2103 11.3C20.8803 10.72 20.5203 9.62001 19.6403 9.55001L14.8103 9.14001L12.9203 4.68001C12.5803 3.87001 11.4203 3.87001 11.0803 4.68001L9.19032 9.13001L4.36032 9.54001C3.48032 9.61001 3.12032 10.71 3.79032 11.29L7.46032 14.47L6.36032 19.19C6.16032 20.05 7.09032 20.73 7.85032 20.27L12.0003 17.77Z"
                fill="#FFC700"
              />
            </svg>
          </div>
          <div className="h-2.5 flex-1 bg-brand-yellow rounded-full"></div>
          <p className="w-8 text-sm text-brand-dark text-end">100%</p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center">
            <p className="text-17 text-brand-dark font-bold">4</p>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0003 17.77L16.1503 20.28C16.9103 20.74 17.8403 20.06 17.6403 19.2L16.5403 14.48L20.2103 11.3C20.8803 10.72 20.5203 9.62001 19.6403 9.55001L14.8103 9.14001L12.9203 4.68001C12.5803 3.87001 11.4203 3.87001 11.0803 4.68001L9.19032 9.13001L4.36032 9.54001C3.48032 9.61001 3.12032 10.71 3.79032 11.29L7.46032 14.47L6.36032 19.19C6.16032 20.05 7.09032 20.73 7.85032 20.27L12.0003 17.77Z"
                fill="#FFC700"
              />
            </svg>
          </div>
          <div className="h-2.5 flex-1 bg-brand-gray/20 rounded-full"></div>
          <p className="w-8 text-sm text-brand-dark text-end">0%</p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center">
            <p className="text-17 text-brand-dark font-bold">3</p>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0003 17.77L16.1503 20.28C16.9103 20.74 17.8403 20.06 17.6403 19.2L16.5403 14.48L20.2103 11.3C20.8803 10.72 20.5203 9.62001 19.6403 9.55001L14.8103 9.14001L12.9203 4.68001C12.5803 3.87001 11.4203 3.87001 11.0803 4.68001L9.19032 9.13001L4.36032 9.54001C3.48032 9.61001 3.12032 10.71 3.79032 11.29L7.46032 14.47L6.36032 19.19C6.16032 20.05 7.09032 20.73 7.85032 20.27L12.0003 17.77Z"
                fill="#FFC700"
              />
            </svg>
          </div>
          <div className="h-2.5 flex-1 bg-brand-gray/20 rounded-full"></div>
          <p className="w-8 text-sm text-brand-dark text-end">0%</p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center">
            <p className="text-17 text-brand-dark font-bold">2</p>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0003 17.77L16.1503 20.28C16.9103 20.74 17.8403 20.06 17.6403 19.2L16.5403 14.48L20.2103 11.3C20.8803 10.72 20.5203 9.62001 19.6403 9.55001L14.8103 9.14001L12.9203 4.68001C12.5803 3.87001 11.4203 3.87001 11.0803 4.68001L9.19032 9.13001L4.36032 9.54001C3.48032 9.61001 3.12032 10.71 3.79032 11.29L7.46032 14.47L6.36032 19.19C6.16032 20.05 7.09032 20.73 7.85032 20.27L12.0003 17.77Z"
                fill="#FFC700"
              />
            </svg>
          </div>
          <div className="h-2.5 flex-1 bg-brand-gray/20 rounded-full"></div>
          <p className="w-8 text-sm text-brand-dark text-end">0%</p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center">
            <p className="text-17 text-brand-dark font-bold">1</p>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0003 17.77L16.1503 20.28C16.9103 20.74 17.8403 20.06 17.6403 19.2L16.5403 14.48L20.2103 11.3C20.8803 10.72 20.5203 9.62001 19.6403 9.55001L14.8103 9.14001L12.9203 4.68001C12.5803 3.87001 11.4203 3.87001 11.0803 4.68001L9.19032 9.13001L4.36032 9.54001C3.48032 9.61001 3.12032 10.71 3.79032 11.29L7.46032 14.47L6.36032 19.19C6.16032 20.05 7.09032 20.73 7.85032 20.27L12.0003 17.77Z"
                fill="#FFC700"
              />
            </svg>
          </div>
          <div className="h-2.5 flex-1 bg-brand-gray/20 rounded-full"></div>
          <p className="w-8 text-sm text-brand-dark text-end">0%</p>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 lg:w-70 lg:h-70 shrink-0 grid place-content-center bg-brand-blue-1 text-xs lg:text-17 uppercase font-semibold text-white rounded-full">
            AP
          </div>
          <div className="flex-1 flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="text-17 font-semibold text-brand-dark">Addison P</p>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    key={idx}
                  >
                    <path
                      d="M12.0003 17.27L16.1503 19.78C16.9103 20.24 17.8403 19.56 17.6403 18.7L16.5403 13.98L20.2103 10.8C20.8803 10.22 20.5203 9.12001 19.6403 9.05001L14.8103 8.64001L12.9203 4.18001C12.5803 3.37001 11.4203 3.37001 11.0803 4.18001L9.19032 8.63001L4.36032 9.04001C3.48032 9.11001 3.12032 10.21 3.79032 10.79L7.46032 13.97L6.36032 18.69C6.16032 19.55 7.09032 20.23 7.85032 19.77L12.0003 17.27Z"
                      fill="#FFC700"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-sm text-brand-gray/50">1/26/2024</p>
          </div>
        </div>
        <p className="text-sm text-brand-dark pl-sixty lg:pl-[5.625rem]">
          This hoodie was fantastic! Fit perfect. Awesome design. Soft material.
          Fast Shipping.
        </p>
      </div>
    </div>
  );
};

export default CustomerReviews;
