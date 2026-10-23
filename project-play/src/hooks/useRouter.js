import { useCallback, useEffect, useState } from 'react';

// Enrutador mínimo basado en el hash (#/modulos, #/leccion/m2-l3...).
// Funciona en Vercel sin configuración extra y permite usar el botón Atrás.
function parse() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const [name = '', param = null] = hash.split('/');
  return { name: name || 'inicio', param };
}

export function useRouter() {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((name, param) => {
    const next = { name, param: param ?? null };
    const hash = '#/' + name + (param ? '/' + param : '');
    try {
      if (window.location.hash !== hash) window.location.hash = hash;
    } catch {
      // Si el entorno no permite modificar el hash, se navega solo con el estado.
    }
    setRoute(next);
    window.scrollTo(0, 0);
  }, []);

  return { route, navigate };
}
