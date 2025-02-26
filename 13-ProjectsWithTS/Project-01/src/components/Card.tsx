import Thumbnail1 from "../assets/thumbnail1.jpg";

interface CardProps {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
}

const Card = ({ thumbnail, title, description, link }: CardProps) => {
  return (
    <div className=" min-w-[18rem] max-w-[25rem] rounded-t-3xl rounded-b-3xl bg-white p-2">
      <div className="w-full rounded-t-3xl rounded-b-3xl overflow-hidden">
        <img
          src={thumbnail ? thumbnail : Thumbnail1}
          alt="thumbnail.jpg"
          className="object-cover w-[100%] h-[100%]"
        />
      </div>
      <div className="flex flex-col gap-y-3 p-2">
        <p className="font-semibold">{title}</p>
        <p className="">{description}</p>
        <button className="px-4 py-2 bg-gray-400 rounded-xl w-fit ">
          <a href={link}>View More...</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
