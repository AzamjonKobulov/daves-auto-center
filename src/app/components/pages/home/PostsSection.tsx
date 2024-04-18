import Image from 'next/image';
import BottomLogoCarousel from '../../shared/BottomLogoCarousel';

const posts = [
  { img: '/assets/images/img-video-1.png' },
  { img: '/assets/images/img-video-2.png' },
  { img: '/assets/images/img-video-3.png' },
  { img: '/assets/images/img-video-4.png' },
  { img: '/assets/images/img-video-5.png' },
  { img: '/assets/images/img-video-6.png' },
  { img: '/assets/images/img-video-7.png' },
  { img: '/assets/images/img-video-8.png' },
];

const PostsSection = () => {
  return (
    <section>
      <div className="max-w-base mx-auto space-y-8 px-5">
        <h2>Recent Posts</h2>
        <div className="relative mx-auto overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
            {posts.map((post, idx) => (
              <a href="#" key={idx} className="rounded-10 overflow-hidden">
                <Image
                  src={post.img}
                  alt="Video"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <BottomLogoCarousel />
    </section>
  );
};

export default PostsSection;
