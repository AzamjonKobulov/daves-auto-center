const ChatButton = () => {
  return (
    <button className="fixed right-10 bottom-10 w-12 h-12 lg:right-70 lg:bottom-70 lg:w-70 lg:h-70 shrink-0 z-[60] grid place-content-center bg-white border border-brand-gray/20 rounded-full shadow-messengerBtn">
      <svg
        width="47"
        height="47"
        viewBox="0 0 47 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 lg:w-auto lg:h-auto"
      >
        <path
          d="M5.87467 23.5C3.72051 23.5 1.95801 21.7375 1.95801 19.5833V9.79167C1.95801 7.6375 3.72051 5.875 5.87467 5.875H21.5413C23.6955 5.875 25.458 7.6375 25.458 9.79167V19.5833C25.458 21.7375 23.6955 23.5 21.5413 23.5H17.6247V29.375L11.7497 23.5H5.87467ZM41.1247 35.25C43.2788 35.25 45.0413 33.4875 45.0413 31.3333V21.5417C45.0413 19.3875 43.2788 17.625 41.1247 17.625H29.3747V19.5833C29.3747 23.8917 25.8497 27.4167 21.5413 27.4167V31.3333C21.5413 33.4875 23.3038 35.25 25.458 35.25H29.3747V41.125L35.2497 35.25H41.1247Z"
          fill="#033E6A"
        />
      </svg>
    </button>
  );
};

export default ChatButton;
