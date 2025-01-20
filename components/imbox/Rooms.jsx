import Image from "next/image";
import Link from "next/link";
export default function Group(prop) {
  const { name, friendsList } = prop;

  return (
    <>
      <Link href={`/inbox/rooms/${prop._id}`}>
        <li className="w-full hover:bg-gray-700   flex gap-2 items-center  p-2 my-2 rounded-md ">
          <div>
            <Image
              alt="friend_img"
              width={400}
              height={400}
              className="w-[50px] h-[50px] rounded-full p-1"
              src={
                prop.roomImage
              }
            />
          </div>
          <div>
            <p>{name}</p>
            <small className="text-gray-400">
              Total {friendsList?.length || 0} Friends this group
            </small>
          </div>
        </li>
      </Link>
    </>
  );
}
