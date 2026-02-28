export default function Imprint() {
  return (
    <main className="container mx-auto px-6 py-64 text-zinc-100 max-w-4xl">
      <h1 className="text-4xl font-medium mb-8 italic italic tracking-tighter">Legal Notice</h1>
      
      <section className="space-y-6 text-zinc-400 leading-relaxed pb-48">
        <div>
          <h2 className="text-xl font-medium text-white mb-2">Information according to § 5 DDG</h2>
          <p>Fadi Moussa<br />
          Huttenstraße 22<br />
          10553 Berlin<br />
          Germany</p>
        </div>

        <div>
          <h2 className="text-xl font-medium text-white mb-2">Contact</h2>
          <p>Email: fadimoussa1998@gmail.com<br />
          Phone: +49 1787108450</p>
        </div>

        <div className="pt-8 text-sm">
          <p>The European Commission provides a platform for online dispute resolution (OS): 
          <a href="https://ec.europa.eu" className="underline hover:text-white" target="_blank" rel="noopener noreferrer" title="https://ec.europa.eu" aria-label="https://ec.europa.eu"> https://ec.europa.eu</a>.
          I am not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>
        </div>
      </section>
    </main>
  );
}