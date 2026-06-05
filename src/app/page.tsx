import Fter from '@/components/Fter';
import Hder from '@/components/Hder';
import HmeBnner from '@/components/Home/HmeBanner';

export default function Home() {
  return (
    <div>
          <Hder />
          <div className='-z-10'>
          <HmeBnner />
          </div>
          <Fter />
    </div>
  );
}