import Image from 'next/image';
import { Button } from '@/components/ui/button';

const toolkitData = [
  {
    title: 'The Ultimate Trading Toolkit',
    description: 'Experience the next level of market analysis with our revolutionary toolkit, seamlessly integrated into your TradingView charts. Our trend-focused signals are designed to accurately identify market shifts early, giving you a clear advantage in finding winning trades.',
    image: '/toolkit.png',
    buttonText: 'Get ChartPrime',
    reversed: false,
  },
  {
    title: 'Easily Identify Winning Trades',
    description: 'Powered by advanced algorithms and real-time data, our indicators are built to consistently identify the best entry and exit points. By analyzing market patterns, divergences, and trend shifts, our indicators excel at spotting top trading opportunities.',
    image: '/25.png',
    buttonText: 'Get ChartPrime',
    reversed: true,
  },
  {
    title: 'Follow the Smart Money',
    description: 'Smart Money Concepts built into our indicators give you a crucial trading advantage by revealing exactly where smart money is moving. This allows you to track key market shifts and align your trades with the strategies of top market leaders.',
    image: '/smart-money.png',
    buttonText: 'Get ChartPrime',
    reversed: false,
  },
];

export default function TradingToolkit() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {toolkitData.map((item, index) => (
            <div
              key={index}
              className={`bg-[#121212] border border-purple-500/30 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(168,85,247,0.2)] grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${item.reversed ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`order-2 ${item.reversed ? 'md:order-1' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {item.title.split(' ').map((word, i) => (
                    <span key={i} className={['Ultimate', 'Winning', 'Smart'].includes(word) ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500' : ''}>
                      {word}{' '}
                    </span>
                  ))}
                </h2>
                <p className="text-white/70 mb-6">{item.description}</p>
                <Button variant="outline" size="lg">{item.buttonText}</Button>
              </div>
              <div className={`order-1 ${item.reversed ? 'md:order-2' : ''}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}