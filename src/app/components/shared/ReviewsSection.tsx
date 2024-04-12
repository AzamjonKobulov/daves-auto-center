import Reviews from './Reviews';

const reviews = [
  {
    review:
      'Dave’s Auto has been very professional with me and has always given me straight forward answers. Whether it’s been an oil change or transmission work, they’ve been up front with me and understanding. Would recommend working with them anytime!',
    client: '- Jordan Harris',
  },
  {
    review:
      'Start to finish, they went above and beyond. They sent me pics of what needed to be done and were so courteous, and just overall great! Highly recommend, and will be going there from now on for car needs.',
    client: '- Laurel Bailey',
  },
  {
    review:
      'Dave’s auto is the best choice for all your repair needs from simple maintenance to full engine rebuilds. I bring my aging fleet vehicle here after having many poor experiences from other repair shops. The staff is nice; the mechanics are very knowledgeable and quick with problem solving.',
    client: '- Glen Ross',
  },
  {
    review:
      'Dave’s Auto has been very professional with me and has always given me straight forward answers. Whether it’s been an oil change or transmission work, they’ve been up front with me and understanding. Would recommend working with them anytime!',
    client: '- Jordan Harris',
  },
  {
    review:
      'Start to finish, they went above and beyond. They sent me pics of what needed to be done and were so courteous, and just overall great! Highly recommend, and will be going there from now on for car needs.',
    client: '- Laurel Bailey',
  },
  {
    review:
      'Dave’s auto is the best choice for all your repair needs from simple maintenance to full engine rebuilds. I bring my aging fleet vehicle here after having many poor experiences from other repair shops. The staff is nice; the mechanics are very knowledgeable and quick with problem solving.',
    client: '- Glen Ross',
  },
  {
    review:
      'Dave’s Auto has been very professional with me and has always given me straight forward answers. Whether it’s been an oil change or transmission work, they’ve been up front with me and understanding. Would recommend working with them anytime!',
    client: '- Jordan Harris',
  },
  {
    review:
      'Start to finish, they went above and beyond. They sent me pics of what needed to be done and were so courteous, and just overall great! Highly recommend, and will be going there from now on for car needs.',
    client: '- Laurel Bailey',
  },
  {
    review:
      'Dave’s auto is the best choice for all your repair needs from simple maintenance to full engine rebuilds. I bring my aging fleet vehicle here after having many poor experiences from other repair shops. The staff is nice; the mechanics are very knowledgeable and quick with problem solving.',
    client: '- Glen Ross',
  },
  {
    review:
      'Dave’s Auto has been very professional with me and has always given me straight forward answers. Whether it’s been an oil change or transmission work, they’ve been up front with me and understanding. Would recommend working with them anytime!',
    client: '- Jordan Harris',
  },
  {
    review:
      'Start to finish, they went above and beyond. They sent me pics of what needed to be done and were so courteous, and just overall great! Highly recommend, and will be going there from now on for car needs.',
    client: '- Laurel Bailey',
  },
  {
    review:
      'Dave’s auto is the best choice for all your repair needs from simple maintenance to full engine rebuilds. I bring my aging fleet vehicle here after having many poor experiences from other repair shops. The staff is nice; the mechanics are very knowledgeable and quick with problem solving.',
    client: '- Glen Ross',
  },
  {
    review:
      'Dave’s Auto has been very professional with me and has always given me straight forward answers. Whether it’s been an oil change or transmission work, they’ve been up front with me and understanding. Would recommend working with them anytime!',
    client: '- Jordan Harris',
  },
  {
    review:
      'Start to finish, they went above and beyond. They sent me pics of what needed to be done and were so courteous, and just overall great! Highly recommend, and will be going there from now on for car needs.',
    client: '- Laurel Bailey',
  },
  {
    review:
      'Dave’s auto is the best choice for all your repair needs from simple maintenance to full engine rebuilds. I bring my aging fleet vehicle here after having many poor experiences from other repair shops. The staff is nice; the mechanics are very knowledgeable and quick with problem solving.',
    client: '- Glen Ross',
  },
  {
    review:
      'Dave’s Auto has been very professional with me and has always given me straight forward answers. Whether it’s been an oil change or transmission work, they’ve been up front with me and understanding. Would recommend working with them anytime!',
    client: '- Jordan Harris',
  },
  {
    review:
      'Start to finish, they went above and beyond. They sent me pics of what needed to be done and were so courteous, and just overall great! Highly recommend, and will be going there from now on for car needs.',
    client: '- Laurel Bailey',
  },
  {
    review:
      'Dave’s auto is the best choice for all your repair needs from simple maintenance to full engine rebuilds. I bring my aging fleet vehicle here after having many poor experiences from other repair shops. The staff is nice; the mechanics are very knowledgeable and quick with problem solving.',
    client: '- Glen Ross',
  },
  {
    review:
      'Dave’s Auto has been very professional with me and has always given me straight forward answers. Whether it’s been an oil change or transmission work, they’ve been up front with me and understanding. Would recommend working with them anytime!',
    client: '- Jordan Harris',
  },
  {
    review:
      'Start to finish, they went above and beyond. They sent me pics of what needed to be done and were so courteous, and just overall great! Highly recommend, and will be going there from now on for car needs.',
    client: '- Laurel Bailey',
  },
  {
    review:
      'Dave’s auto is the best choice for all your repair needs from simple maintenance to full engine rebuilds. I bring my aging fleet vehicle here after having many poor experiences from other repair shops. The staff is nice; the mechanics are very knowledgeable and quick with problem solving.',
    client: '- Glen Ross',
  },
];

const ReviewsSection = () => {
  return (
    <section>
      <div className="mx-auto space-y-8">
        <h2 className="max-w-base mx-auto px-5">What our clients say</h2>
        <div className="slider relative mx-auto overflow-hidden">
          <div className="slide-track flex items-stretch gap-5 py-2">
            {reviews.map((review, idx) => (
              <Reviews key={idx} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
