"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MerkleTree = () => {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNodes = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * 15)
      );
      setActiveNodes(randomNodes);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nodes = [
    // Root (Level 0)
    { id: 0, x: 50, y: 10, level: 0 },
    // Level 1
    { id: 1, x: 30, y: 30, level: 1 },
    { id: 2, x: 70, y: 30, level: 1 },
    // Level 2
    { id: 3, x: 15, y: 50, level: 2 },
    { id: 4, x: 35, y: 50, level: 2 },
    { id: 5, x: 55, y: 50, level: 2 },
    { id: 6, x: 75, y: 50, level: 2 },
    // Level 3 (Leaves)
    { id: 7, x: 5, y: 70, level: 3 },
    { id: 8, x: 20, y: 70, level: 3 },
    { id: 9, x: 30, y: 70, level: 3 },
    { id: 10, x: 40, y: 70, level: 3 },
    { id: 11, x: 50, y: 70, level: 3 },
    { id: 12, x: 60, y: 70, level: 3 },
    { id: 13, x: 70, y: 70, level: 3 },
    { id: 14, x: 80, y: 70, level: 3 },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 2, to: 5 },
    { from: 2, to: 6 },
    { from: 3, to: 7 },
    { from: 3, to: 8 },
    { from: 4, to: 9 },
    { from: 4, to: 10 },
    { from: 5, to: 11 },
    { from: 5, to: 12 },
    { from: 6, to: 13 },
    { from: 6, to: 14 },
  ];

  return (
    <div className="relative w-full h-[600px] glass-effect rounded-2xl p-8">
      <div className="absolute top-4 left-4">
        <h3 className="text-lg font-semibold text-cyber-blue mb-1">
          Merkle Tree Verification
        </h3>
        <p className="text-sm text-gray-400">
          Real-time cryptographic trust validation
        </p>
      </div>

      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connections */}
        {connections.map((conn, idx) => {
          const fromNode = nodes.find((n) => n.id === conn.from);
          const toNode = nodes.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          const isActive =
            activeNodes.includes(conn.from) || activeNodes.includes(conn.to);

          return (
            <motion.line
              key={idx}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke={isActive ? "#1e3a8a" : "#334155"}
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                stroke: isActive ? "#1e3a8a" : "#334155",
              }}
              transition={{ duration: 1, delay: idx * 0.05 }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = activeNodes.includes(node.id);
          const isRoot = node.level === 0;

          return (
            <motion.g key={node.id}>
              {/* Glow effect for active nodes */}
              {isActive && (
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="2"
                  fill="#1e3a8a"
                  opacity="0.3"
                  animate={{ r: [2, 3, 2], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}

              {/* Main node */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={isRoot ? "1.5" : "1"}
                fill={isActive ? "#1e3a8a" : isRoot ? "#6366f1" : "#334155"}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: node.level * 0.2 }}
                whileHover={{ scale: 1.5 }}
                style={{ cursor: "pointer" }}
              />

              {/* Label for root */}
              {isRoot && (
                <text
                  x={node.x}
                  y={node.y - 3}
                  textAnchor="middle"
                  fill="#6366f1"
                  fontSize="2"
                  fontWeight="bold"
                >
                  ROOT
                </text>
              )}
            </motion.g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 glass-effect rounded-lg p-3 text-xs">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-cyber-purple" />
          <span className="text-gray-300">Root Hash</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-cyber-blue animate-pulse" />
          <span className="text-gray-300">Active Verification</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-600" />
          <span className="text-gray-300">Verified Nodes</span>
        </div>
      </div>
    </div>
  );
};

export default MerkleTree;
