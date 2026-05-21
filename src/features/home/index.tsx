import { laboratoryExperiments } from '@/data/laboratory';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="p-5">
      <h1 className="text-heading mb-5 text-2xl font-bold">GSAP Lab</h1>
      <div className="flex flex-col space-y-2">
        {laboratoryExperiments.map((lab) => (
          <div
            key={lab.slug}
            onClick={() => navigate(`/laboratory/${lab.slug}`)}
            className="border-blak/90 cursor-pointer rounded-lg border bg-white p-3 hover:border-slate-600"
          >
            <h2 className="text-heading font-medium">{lab.title}</h2>
            <p className="text-black/60">{lab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
