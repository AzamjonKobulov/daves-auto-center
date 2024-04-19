import Image from 'next/image';

const Empty = () => {
  return (
    <div className="w-full h-full grid place-content-center py-20 lg:py-24">
      <div className="space-y-4 text-center">
        <Image
          src="/assets/images/img-empty.svg"
          alt="Empty"
          width={200}
          height={300}
          className="w-auto h-auto"
        />
        <p className="text-15">It is empty here</p>
      </div>
    </div>
  );
};

export default Empty;
