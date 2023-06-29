import Image from "next/image";

interface PostProps {
  classes?: string;
  imgWidth: number;
  imgHeight: number;
  index: number;
}

const Post = ({ classes = "", imgWidth, imgHeight, index }: PostProps) => {
  return (
    <div className={`flex gap-5 ${classes} max-md:flex-col`}>
      <Image
        src={`https://picsum.photos/id/${index}/400/200`}
        alt="blog img"
        width={imgWidth}
        height={imgHeight}
        className="object-cover flex-1 w-auto h-auto"
      />
      <div className="flex flex-col gap-2 flex-1">
        <p className="text-purple font-medium text-sm">
          Olivia Rhye - 1 Jan 2023
        </p>
        <h3 className="text-2xl font-medium">UX review presentations</h3>
        <p className="text-textColor">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </p>
        <ul className="flex gap-3">
          <li className="text-purple rounded-xl px-2 py-1 bg-purple bg-opacity-5 text-xs">
            Design
          </li>
          <li className="text-blue bg-blue bg-opacity-5  rounded-xl px-2 py-1 text-xs">
            Research
          </li>
          <li className="text-pink bg-pink bg-opacity-5 rounded-xl px-2 py-1 text-xs">
            Presentation
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
