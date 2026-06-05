import Fter from '@/components/Fter';
import Hder from '@/components/Hder';
import ManBnner from '@/components/manifesto/ManBnner';
import ManBnnerMvil from '@/components/manifiestomovil/ManBnnerMvil';
import ResponsiveAnimatedComponent from '@/components/manifiestomovil/ResponsiveAnimatedComponent';
import  ManCarrTxt from '@/components/manifiestomovil/ManCarrTxt';
import TldrAccordion from '@/components/manifiestomovil/TldrAccordion';

export default function Home() {
  return (
    <div>
      <Hder />
      <div className='-z-10 hidden sm:block'>
        <ManBnner />
      </div>
      <div className="sm:hidden">
        <ManBnnerMvil />
        <ResponsiveAnimatedComponent />
        <ManCarrTxt />
        <TldrAccordion />
      </div>
      <Fter />
    </div>
  );
}