import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-surface">
      <div className="text-center px-4">
        <h1 className="text-7xl font-bold text-primary/20">404</h1>
        <h2 className="text-2xl font-bold text-primary mt-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-text-light mt-2 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-xl font-semibold transition-all mt-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
