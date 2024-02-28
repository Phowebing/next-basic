// use client
import HomeButton from "@/app/components/HomeBotton";
// @은 /src 를 가르키는 절대 경로입니다.
import style from "@/app/styles/detail.module.css";
type Props = {
  params: {
    city: string;
  };
};

const Detail = ({ params }: Props) => {
  const cityName = params.city === "daegu" ? "대구" : params.city;
  return (
    <>
      {/* <Link href="/">이전페이지</Link> */}
      {/* <button onClick={() => handleClick()}>이전으로</button> */}
      <div className={style.detailTitle}>상세내용 : {cityName}</div>
      <HomeButton />
    </>
  );
};

export default Detail;
