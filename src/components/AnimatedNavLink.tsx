import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

interface AnimatedNavLinkProps {
  to: string
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
}

export default function AnimatedNavLink({ to, children, isActive = false, onClick }: AnimatedNavLinkProps) {
  const location = useLocation()
  const isCurrentPath = location.pathname === to

  return (
    <motion.div
      className="relative"
      whileHover="hover"
      initial="rest"
      animate={isCurrentPath ? "active" : "rest"}
    >
      <motion.div
        className="absolute inset-0 bg-purple-600 rounded-lg"
        variants={{
          rest: { scale: 0, rotate: 0 },
          hover: { scale: 1, rotate: 180 },
          active: { scale: 1, rotate: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      <Link
        to={to}
        onClick={onClick}
        className={`relative block px-4 py-2 text-sm font-inter transition-colors ${
          isActive || isCurrentPath 
            ? 'text-white' 
            : 'text-gray-300 hover:text-white'
        }`}
      >
        <motion.span
          variants={{
            rest: { y: 0 },
            hover: { y: -2 },
            active: { y: 0 }
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.span>
      </Link>
    </motion.div>
  )
}
