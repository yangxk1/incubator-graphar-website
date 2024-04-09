/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  Svg: string;
  title: string;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Efficient format design',
    Svg: require('@site/static/img/banner/design.svg').default,
    description: (
      <>
        GraphAr is designed to be efficient for storage and retrieval of large-scale graph data with techniques such as
        chunking, columnar storage, and maintain CSR/CSC semantics.
      </>
    ),
  },
  {
    title: 'Out-of-core queries',
    Svg: require('@site/static/img/banner/search.svg').default,
    description: (
      <>
        Designed for out-of-core scenarios, enabling the storage and querying of large-scale graphs outside of memory,
        such as in data lakes.
      </>
    ),
  },
  {
    title: 'Cross-language support',
    Svg: require('@site/static/img/banner/language.svg').default,
    description: (
      <>
        Provides libraries in C++, Java, Scala with Spark, and Python with PySpark for generating, accessing, and
        transforming files in GraphAr format.
      </>
    ),
  },
];

function Feature({ title, description, Svg }: FeatureItem) {
  console.log('icon', Svg);
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div> {<Svg role="img" className={styles.featureSvg} />}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
