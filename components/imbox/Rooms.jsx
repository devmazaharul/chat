import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Group(prop) {

  let path=usePathname();
  const newPaht=path.split("/")


  const { name, friendsList } = prop;

  return (
    <>
      <Link href={`/inbox/rooms/${prop._id}`}>

        <li className={`${newPaht.includes(prop._id)?"bg-gray-800":""} w-full hover:bg-gray-700   flex gap-2 items-center  p-2 my-2 rounded-md `}>
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
