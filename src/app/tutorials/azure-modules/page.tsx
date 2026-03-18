'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TechnologyCard, CardGrid } from '@/components/common/technology-card';

export default function AzureModulesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen pb-20 pt-[120px] overflow-hidden relative bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              Azure Data Engineer 
              {/* <span className="text-blue-600">Specializations</span> */}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose a specific module to begin your deep dive into Azure cloud data engineering.
            </p>
          </div>
        </div>

        <CardGrid columns={3} className="max-w-6xl mx-auto gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <TechnologyCard
              title="Azure Basics"
              description="Fundamentals of Azure cloud services, security, compliance, and core platform capabilities."
              icon=''
              link="/tutorials/azure-data-engineer?group=basics"
              gradient="from-sky-400 to-blue-500"
              iconBg="bg-sky-50"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TechnologyCard
              title="Azure Databricks"
              description="Learn to build big data analytics solutions using Apache Spark and unified analytics platform."
              icon=''
              link="/tutorials/azure-data-engineer?group=databricks"
              gradient="from-orange-400 to-red-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <TechnologyCard
              title="Azure Data Factory"
              description="Master data integration, orchestration, and monitoring across hybrid data sources."
              icon=''
              link="/tutorials/azure-data-engineer?group=datafactory"
              gradient="from-indigo-400 to-blue-600"
              iconBg="bg-indigo-50"
            />
          </motion.div>
        </CardGrid>

      </div>
    </main>
  );
}
