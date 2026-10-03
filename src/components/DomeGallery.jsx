import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

const DEFAULT_IMAGES = [
  {
    src: '/images/pistachio-rose-cake.jpg',
    alt: 'Artisan Pistachio Rose Cake'
  },
  {
    src: '/images/cafe-convo-interior.jpg',
    alt: 'Morning Café Conversation & Hospitality'
  },
  {
    src: '/images/sticky-notes-feedback.jpg',
    alt: 'Community Feedback Sticky Notes'
  },
  {
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    alt: 'Belgian Chocolate Truffle Cake'
  },
  {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    alt: 'Normandy Butter Croissants'
  },
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    alt: 'Specialty Espresso Bar'
  },
  {
    src: 'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    alt: 'Artisan Sourdough Boule'
  },
  {
    src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    alt: 'Salted Caramel Tart'
  },
  {
    src: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=800&q=80',
    alt: 'French Macaron Palette'
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    alt: 'Sunlit Courtyard Tables'
  },
  {
    src: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80',
    alt: 'Red Velvet Slice'
  },
  {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    alt: "Master Baker's Hearth"
  },
  {
    src: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    alt: 'Velvety Cappuccino Microfoam'
  },
  {
    src: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
    alt: 'Olive & Rosemary Focaccia'
  }
];

const DEFAULTS = {
  maxVerticalRotationDeg: 30,
  dragSensitivity: 16,
  dragFriction: 0.92,
  wheelSensitivity: 0.08,
  autoRotateSpeed: 0.3,
  segments: 30
};

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

function buildSegments(images, count = DEFAULTS.segments) {
  const result = [];
  for (let i = 0; i < count; i++) {
    const img = images[i % images.length];
    result.push({
      src: img.src,
      alt: img.alt || `Maison Crème Showcase ${i + 1}`
    });
  }
  return result;
}

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  segments = DEFAULTS.segments,
  grayscale = false,
  overlayBlur = 0,
  overlayColor = 'rgba(28, 16, 12, 0.35)',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  dragFriction = DEFAULTS.dragFriction,
  wheelSensitivity = DEFAULTS.wheelSensitivity,
  autoRotateSpeed = DEFAULTS.autoRotateSpeed,
  transitionDuration = '0.35s',
  onItemClick
}) {
  const containerRef = useRef(null);
  const sphereRef = useRef(null);

  const rotYRef = useRef(0);
  const rotXRef = useRef(0);
  const velXRef = useRef(0);
  const velYRef = useRef(0);
  const autoRotateRef = useRef(true);
  const animFrameIdRef = useRef(null);
  const isDraggingRef = useRef(false);

  // Responsive dome sphere radius
  const [sphereRadius, setSphereRadius] = useState(380);

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSphereRadius(270);
      } else if (width < 1024) {
        setSphereRadius(330);
      } else {
        setSphereRadius(380);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const finalSegments = useMemo(() => buildSegments(images, segments), [images, segments]);

  const updateTransforms = useCallback(() => {
    if (!sphereRef.current) return;
    sphereRef.current.style.transform = `rotateX(${rotXRef.current}deg) rotateY(${rotYRef.current}deg)`;
  }, []);

  const animate = useCallback(() => {
    if (!isDraggingRef.current) {
      if (autoRotateRef.current) {
        rotYRef.current = (rotYRef.current + autoRotateSpeed) % 360;
      }
      velXRef.current *= dragFriction;
      velYRef.current *= dragFriction;

      if (Math.abs(velXRef.current) > 0.01 || Math.abs(velYRef.current) > 0.01) {
        rotYRef.current = (rotYRef.current + velXRef.current) % 360;
        rotXRef.current = clamp(rotXRef.current - velYRef.current, -maxVerticalRotationDeg, maxVerticalRotationDeg);
      }
    }
    updateTransforms();
    animFrameIdRef.current = requestAnimationFrame(animate);
  }, [autoRotateSpeed, dragFriction, maxVerticalRotationDeg, updateTransforms]);

  useEffect(() => {
    animFrameIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [animate]);

  useGesture(
    {
      onDragStart: () => {
        isDraggingRef.current = true;
        autoRotateRef.current = false;
      },
      onDrag: ({ delta: [dx, dy] }) => {
        velXRef.current = (dx / window.innerWidth) * dragSensitivity * 15;
        velYRef.current = (dy / window.innerHeight) * dragSensitivity * 15;
        rotYRef.current = (rotYRef.current + velXRef.current) % 360;
        rotXRef.current = clamp(rotXRef.current - velYRef.current, -maxVerticalRotationDeg, maxVerticalRotationDeg);
        updateTransforms();
      },
      onDragEnd: () => {
        isDraggingRef.current = false;
        setTimeout(() => {
          autoRotateRef.current = true;
        }, 2500);
      },
      onWheel: ({ delta: [, dy], event }) => {
        event.preventDefault();
        velXRef.current = -dy * wheelSensitivity * 0.1;
        rotYRef.current = (rotYRef.current + velXRef.current) % 360;
        updateTransforms();
      }
    },
    {
      target: containerRef,
      drag: { filterTaps: true },
      wheel: { eventOptions: { passive: false } }
    }
  );

  return (
    <div
      ref={containerRef}
      className="dome-gallery-container relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing rounded-3xl"
      style={{
        '--overlay-blur': `${overlayBlur}px`,
        '--overlay-color': overlayColor,
        '--transition-duration': transitionDuration
      }}
    >
      <div className="dome-gallery-viewport">
        <div ref={sphereRef} className="dome-sphere">
          {finalSegments.map((item, index) => {
            const phi = Math.acos(-1 + (2 * index) / finalSegments.length);
            const theta = Math.sqrt(finalSegments.length * Math.PI) * phi;
            const rotY = (theta * 180) / Math.PI;
            const rotX = ((phi - Math.PI / 2) * 180) / Math.PI;

            return (
              <div
                key={index}
                className={`dome-item-wrapper ${grayscale ? 'grayscale hover:grayscale-0' : ''}`}
                style={{
                  transform: `rotateY(${rotY}deg) rotateX(${rotX}deg) translateZ(${sphereRadius}px)`
                }}
                onClick={() => onItemClick && onItemClick(item, index)}
              >
                <div className="dome-item-inner shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden border border-cream-200/30 bg-espresso-950">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="dome-overlay" />
                  <div className="dome-caption">
                    <span className="text-[9px] sm:text-[11px] font-sans font-semibold text-cream-50 truncate drop-shadow-md block">
                      {item.alt}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Interactive Prompt */}
      <div className="absolute bottom-3 sm:bottom-4 inset-x-0 flex items-center justify-center pointer-events-none z-10">
        <div className="px-3.5 py-1.5 rounded-full bg-espresso-950/85 backdrop-blur-md text-cream-100 text-[11px] sm:text-xs font-medium border border-cream-200/20 shadow-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-caramel-400 animate-pulse" />
          <span>Drag, swipe or spin 3D bakery dome</span>
        </div>
      </div>
    </div>
  );
}
