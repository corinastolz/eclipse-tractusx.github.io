/**
* Copyright (c) 2022,2023 Contributors to the Eclipse Foundation
*
* See the NOTICE file(s) distributed with this work for additional
* information regarding copyright ownership.
*
* This program and the accompanying materials are made available under the
* terms of the Apache License, Version 2.0 which is available at
* https://www.apache.org/licenses/LICENSE-2.0.
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations
* under the License.
*
* SPDX-License-Identifier: Apache-2.0
*/

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-nocheck

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
    kits: [
        {
            type: 'category',
            label: 'Behaviour Twin KIT',
            link: {
                type: 'doc',
                id: 'kits/behaviour-twin-kit/overview',
            },
            collapsed: true,
            items: [
                'kits/behaviour-twin-kit/changelog',
                {
                    type: 'category',
                    label: 'Adoption View',
                    link: {
                        type: 'doc',
                        id: 'kits/behaviour-twin-kit/adoption-view/overview',
                    },
                    items: [
                        'kits/behaviour-twin-kit/adoption-view/introduction',
                        'kits/behaviour-twin-kit/adoption-view/architecture',
                        'kits/behaviour-twin-kit/adoption-view/knowledge-agent',
                        'kits/behaviour-twin-kit/adoption-view/versioning',
                        'kits/behaviour-twin-kit/adoption-view/to-be-considered',
                        'kits/behaviour-twin-kit/adoption-view/new-use-cases',
                        'kits/behaviour-twin-kit/adoption-view/terminology',
                    ]
                },
                {
                    type: 'category',
                    label: 'Development View',
                    link: {
                        type: 'doc',
                        id: 'kits/behaviour-twin-kit/software-development-view/overview',
                    },
                    items: [
                        'kits/behaviour-twin-kit/software-development-view/contracts-and-policies',
                        'kits/behaviour-twin-kit/software-development-view/data-bindings',
                        'kits/behaviour-twin-kit/software-development-view/service-bindings',
                        'kits/behaviour-twin-kit/software-development-view/skill',
                        'kits/behaviour-twin-kit/software-development-view/guidance-and-resources',
                    ]
                },
                {
                    type: 'category',
                    label: 'Use Cases',
                    link: {
                        type: 'doc',
                        id: 'kits/behaviour-twin-kit/use-cases/overview',
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'Remaining useful Life',
                            link: {
                                type: 'doc',
                                id: 'kits/behaviour-twin-kit/use-cases/rul/overview',
                            },
                            items: [
                                {
                                    type: 'category',
                                    label: 'Adoption View',
                                    link: {
                                        type: 'doc',
                                        id: 'kits/behaviour-twin-kit/use-cases/rul/adoption-view/overview',
                                    },
                                    items: [
                                        'kits/behaviour-twin-kit/use-cases/rul/adoption-view/introduction',
                                        'kits/behaviour-twin-kit/use-cases/rul/adoption-view/architecture',
                                        'kits/behaviour-twin-kit/use-cases/rul/adoption-view/terminology',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Development View',
                                    link: {
                                        type: 'doc',
                                        id: 'kits/behaviour-twin-kit/use-cases/rul/development-view/overview',
                                    },
                                    items: [
                                        'kits/behaviour-twin-kit/use-cases/rul/development-view/data-bindings',
                                        'kits/behaviour-twin-kit/use-cases/rul/development-view/service-bindings',
                                        'kits/behaviour-twin-kit/use-cases/rul/development-view/skill',
                                    ]
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Health Indicator',
                            link: {
                                type: 'doc',
                                id: 'kits/behaviour-twin-kit/use-cases/hi/overview',
                            },
                            items: [
                                {
                                    type: 'category',
                                    label: 'Adoption View',
                                    link: {
                                        type: 'doc',
                                        id: 'kits/behaviour-twin-kit/use-cases/hi/adoption-view/overview',
                                    },
                                    items: [
                                        'kits/behaviour-twin-kit/use-cases/hi/adoption-view/introduction',
                                        'kits/behaviour-twin-kit/use-cases/hi/adoption-view/architecture',
                                        'kits/behaviour-twin-kit/use-cases/hi/adoption-view/terminology',
                                    ]
                                },
                                {
                                    type: 'category',
                                    label: 'Development View',
                                    link: {
                                        type: 'doc',
                                        id: 'kits/behaviour-twin-kit/use-cases/hi/development-view/overview',
                                    },
                                    items: [
                                        'kits/behaviour-twin-kit/use-cases/hi/development-view/data-bindings',
                                        'kits/behaviour-twin-kit/use-cases/hi/development-view/service-bindings',
                                        'kits/behaviour-twin-kit/use-cases/hi/development-view/skill',
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        },
      {
        type: 'category',
        label: 'Business Partner KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          'kits/business-partner-kit/changelog',
          'kits/business-partner-kit/adoption-view',
          {
            type: 'category',
            label: 'Development View',
            link: { type: 'generated-index' },
            items: [
              'kits/business-partner-kit/software-development-view/specification',
              {
                type: 'link',
                label: 'Gate API',
                href: 'https://eclipse-tractusx.github.io/api-hub/bpdm/7.0.0/gate/swagger-ui/'
              },
              {
                type: 'link',
                label: 'Pool API',
                href: 'https://eclipse-tractusx.github.io/api-hub/bpdm/7.0.0/pool/swagger-ui/'
              },
              {
                type: 'link',
                label: 'Orchestrator API',
                href: 'https://eclipse-tractusx.github.io/api-hub/bpdm/7.0.0/orchestrator/swagger-ui/'
              },
              'kits/business-partner-kit/software-development-view/use-cases'
            ]
          },
          'kits/business-partner-kit/operation-view',
          {
            type: 'category',
            label: 'Success Stories',
            link: { type: 'generated-index' },
            items: [
              {
                type: 'autogenerated',
                dirName: 'kits/business-partner-kit/success-stories'
              }
            ]
          },
          {
            type: 'category',
            label: 'Architecture View',
            link: { type: 'generated-index' },
            items: [
              {
                type: 'autogenerated',
                dirName: 'kits/business-partner-kit/documentation-bpdm'
              }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Circularity KIT',
        link: {
            type: 'doc',
            id: 'kits/circularity-kit/adoption-view'
        },
        items: [
            'kits/circularity-kit/changelog',
            'kits/circularity-kit/adoption-view',
            'kits/circularity-kit/glossary',
        ]
      },
      {
        type: 'category',
        label: 'Connector KIT',
        link: {
            type: 'generated-index',
        },
        collapsed: true,
        items: [
            'kits/connector-kit/changelog',
            {
                type: 'category',
                label: 'Adoption View',
                link: {
                    type: 'doc',
                    id: 'kits/connector-kit/adoption-view/adoption-view'
                },
                items: [
                    {
                        type: 'autogenerated',
                        dirName: 'kits/connector-kit/adoption-view',
                    },
                ]
            },
            {
                type: 'category',
                label: 'Software Development View',
                link: {
                    type: 'doc',
                    id: 'kits/connector-kit/software-development-view/specifications'
                },
                items: [
                    {
                        type: 'autogenerated',
                        dirName: 'kits/connector-kit/software-development-view',
                    },
                ]
            },
            'kits/connector-kit/operation-view/operation-view',

        ],
      },
      {
        type: 'category',
        label: 'Customs KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/customs-kit'
          }
        ]
      },
      {
        type: 'category',
        label: 'Data Chain KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          'kits/data-chain-kit/changelog',
          'kits/data-chain-kit/adoption-view',
          'kits/data-chain-kit/operation-view',
          {
            type: 'category',
            label: 'Development View',
            link: {
              type: 'doc',
              id: 'kits/data-chain-kit/software-development-view/software-development-view'
            },
            items: [
              {
                type: 'link',
                label: 'Item Relationship Service API',
                href: 'https://eclipse-tractusx.github.io/api-hub/item-relationship-service/7.0.1/swagger-ui/'
              }
            ]
          },
          {
            type: 'category',
            label: 'Documentation',
            items: [
              {
                type: 'autogenerated',
                dirName: 'kits/data-chain-kit/documentation'
              }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Data Governance KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          'kits/data-governance-kit/changelog',
          'kits/data-governance-kit/adoption-view',
          {
            type: 'category',
            label: 'Development View',
            link: {
              type: 'doc',
              id: 'kits/data-governance-kit/development-view'
            },
            items: [
              {
                type: 'link',
                label: 'OpenAPI',
                href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-data-governance-openAPI-0.0.1-SNAPSHOT/swagger-ui/'
              }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Demand and Capacity Management KIT',
        link: {
          type: 'doc',
          id: 'kits/demand-and-capacity-management-kit/adoption-view/overview'
        },
        collapsed: true,
        items: [
          'kits/demand-and-capacity-management-kit/changelog',
          {
            type: 'category',
            label: 'Adoption View',
            link: {
              type: 'doc',
              id: 'kits/demand-and-capacity-management-kit/adoption-view/overview'
            },
            items: [
              'kits/demand-and-capacity-management-kit/adoption-view/glossary',
              {
                type: 'category',
                label: 'Use Case',
                link: { type: 'generated-index' },
                collapsed: true,
                items: [
                  {
                    type: 'autogenerated',
                    dirName: 'kits/demand-and-capacity-management-kit/adoption-view/use-case'
                  }
                ]
              },
              'kits/demand-and-capacity-management-kit/adoption-view/onboarding',
              'kits/demand-and-capacity-management-kit/adoption-view/qna',
              'kits/demand-and-capacity-management-kit/adoption-view/foss-app'
            ]
          },
          {
            type: 'category',
            label: 'Development View',
            link: {
              type: 'doc',
              id: 'kits/demand-and-capacity-management-kit/software-development-view/overview'
            },
            items: [
              'kits/demand-and-capacity-management-kit/software-development-view/model-WeekBasedMaterialDemand',
              'kits/demand-and-capacity-management-kit/software-development-view/model-WeekBasedCapacityGroup',
              'kits/demand-and-capacity-management-kit/software-development-view/model-IdBasedRequestForUpdate',
              'kits/demand-and-capacity-management-kit/software-development-view/model-IdBasedComment',
              'kits/demand-and-capacity-management-kit/software-development-view/api-WeekBasedMaterialDemand',
              'kits/demand-and-capacity-management-kit/software-development-view/api-WeekBasedCapacityGroup',
              'kits/demand-and-capacity-management-kit/software-development-view/api-IdBasedRequestForUpdate',
              'kits/demand-and-capacity-management-kit/software-development-view/api-IdBasedComment',
              'kits/demand-and-capacity-management-kit/software-development-view/api-aas',
              'kits/demand-and-capacity-management-kit/software-development-view/test-customer',
              'kits/demand-and-capacity-management-kit/software-development-view/test-supplier'
            ]
          },
          {
            type: 'category',
            label: 'Architecture View',
            link: {
              type: 'doc',
              id: 'kits/demand-and-capacity-management-kit/architecture-view/overview'
            },
            items: [
              'kits/demand-and-capacity-management-kit/architecture-view/dependencies'
            ]
          },
          'kits/demand-and-capacity-management-kit/operation-view'
        ]
      },
      {
        type: 'category',
        label: 'Digital Twin KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/digital-twin-kit'
          }
        ]
      },
      {
        type: 'category',
        label: 'Eco Pass KIT',
        link: {
            type: 'generated-index',
        },
        collapsed: true,
        items: [
            'kits/eco-pass-kit/changelog',
            'kits/eco-pass-kit/adoption-view',
            'kits/eco-pass-kit/software-development-view',
            'kits/eco-pass-kit/software-operation-view',
            {
                type: 'category',
                label: 'Success Stories',
                link: {
                    type: 'generated-index'
                },
                collapsed: true,
                items: [
                    {
                        type: 'autogenerated',
                        dirName: 'kits/eco-pass-kit/success-stories'
                    }
                ]
            },

        ],
      },
      {
        type: 'category',
        label: 'Environmental and Social Standards KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/environmental-and-social-standards-kit'
          }
        ]
      },
      {
          type: 'category',
          label: 'Industry Core KIT',
          link: {
              type: 'generated-index',
          },
          collapsed: true,
          items: [
              {
                  type: 'autogenerated',
                  dirName: 'kits/industry-core-kit',
              },
          ],
      },
      {
        type: 'category',
        label: 'Knowledge Agents KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          'kits/knowledge-agents-kit/changelog',
          'kits/knowledge-agents-kit/adoption-view/intro',
          {
            type: 'category',
            label: 'Software Development View',
            link: {
              type: 'doc',
              id: 'kits/knowledge-agents-kit/software-development-view/architecture'
            },
            collapsed: true,
            items: [
              'kits/knowledge-agents-kit/software-development-view/Arc42',
              'kits/knowledge-agents-kit/software-development-view/modelling',
              'kits/knowledge-agents-kit/software-development-view/modules',
              'kits/knowledge-agents-kit/software-development-view/reference',
              {
                type: 'category',
                label: 'API',
                link: {
                  type: 'doc',
                  id: 'kits/knowledge-agents-kit/software-development-view/api'
                },
                collapsed: true,
                items: [
                  'kits/knowledge-agents-kit/software-development-view/api/agent/getAgent',
                  'kits/knowledge-agents-kit/software-development-view/api/agent/postAgent',
                  'kits/knowledge-agents-kit/software-development-view/api/agent/skill/postSkill',
                  'kits/knowledge-agents-kit/software-development-view/api/agent/skill/getSkill',
                  'kits/knowledge-agents-kit/software-development-view/api/graph/postGraph',
                  'kits/knowledge-agents-kit/software-development-view/api/graph/deleteGraph'
                ]
              }
            ]
          },
          {
            type: 'category',
            label: 'Operation View',
            link: {
              type: 'doc',
              id: 'kits/knowledge-agents-kit/operation-view/deployment'
            },
            collapsed: true,
            items: [
              'kits/knowledge-agents-kit/operation-view/agent-edc',
              'kits/knowledge-agents-kit/operation-view/provider',
              'kits/knowledge-agents-kit/operation-view/bridge',
              'kits/knowledge-agents-kit/operation-view/policy',
              'kits/knowledge-agents-kit/operation-view/testbed'
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Logistics KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/logistics-kit'
          }
        ]
      },
      {
        type: 'category',
        label: 'Manufacturing as a Service KIT',
        link: {
            type: 'generated-index',
        },
        collapsed: true,
        items:
            [
                'kits/manufacturing-as-a-service-kit/changelog',
                'kits/manufacturing-as-a-service-kit/adoption-view',
                {
                    type: 'category',
                    label: 'Software Development View',
                    collapsed: true,
                    items:
                        [
                            'kits/manufacturing-as-a-service-kit/software-development-view/introduction',
                            'kits/manufacturing-as-a-service-kit/software-development-view/architecture',
                            {
                                type: 'category',
                                label: 'Manufacturing Capability',
                                collapsed: true,
                                items:
                                    [
                                        'kits/manufacturing-as-a-service-kit/software-development-view/manufacturing-capability/manufacturing-capability-aspect-model',
                                        'kits/manufacturing-as-a-service-kit/software-development-view/manufacturing-capability/api-description',
                                        {
                                            type: "link",
                                            label: "Manufacturing Capability API",
                                            href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-maas-ManufacturingCapability-openAPI-v3.1.0/swagger-ui/'
                                        },
                                    ],
                            },
                            {
                                type: 'category',
                                label: 'Request for Quotation',
                                collapsed: true,
                                items:
                                    [
                                        'kits/manufacturing-as-a-service-kit/software-development-view/request-for-quotation/request-for-quotation',
                                        'kits/manufacturing-as-a-service-kit/software-development-view/request-for-quotation/api-description',
                                        {
                                            type: "link",
                                            label: "Request for Quotation API",
                                            href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-maas-RfQ-openAPI-v3/swagger-ui/'
                                        },
                                    ],
                            },
                        ],
                },
            ],
      },
      {
        type: 'category',
        label: 'Model Based Development and Data Processing KIT',
        link: {
            type: 'generated-index',
        },
        collapsed: true,
        items: [
            'kits/model-based-development-and-data-processing-kit/changelog',
            'kits/model-based-development-and-data-processing-kit/adoption-view',
            'kits/model-based-development-and-data-processing-kit/development-view',
            {
                type: 'category',
                label: 'Success Stories',
                link: {
                    type: 'generated-index'
                },
                collapsed: true,
                items: [
                    {
                        type: 'autogenerated',
                        dirName: 'kits/model-based-development-and-data-processing-kit/success-stories'
                    }
                ]
            },

        ],
      },
      {
        type: 'category',
        label: 'Modular Production KIT',
        link: {
            type: 'generated-index',
        },
        collapsed: true,
        items: [
            {
                type: 'autogenerated',
                dirName: 'kits/modular-production-kit',
            },
            {
                type: 'category',
                label: 'Software Development View',
                link: {
                    type: 'generated-index',
                },
                items: [
                    {
                        type: "link",
                        label: "Consumer: GetProductionForecast API",
                        href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-modular-production-ProvideProductionForecast-openAPI-v2/swagger-ui/'
                    },
                    {
                        type: "link",
                        label: "Consumer: ProvideProductionTracking API",
                        href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-modular-production-ProvideProductionTracking-openAPI-v1/swagger-ui/'
                    },
                    {
                        type: "link",
                        label: "Provider: GetProductionForecast API",
                        href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-modular-production-GetProductionForecast-openAPI-v2/swagger-ui/'
                    },
                    {
                        type: "link",
                        label: "Provider: GetProductionTracking API",
                        href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-modular-production-GetProductionTracking-openAPI-v1/swagger-ui/'
                    }
                ]
            }
        ]
    },
      {
        type: 'category',
        label: 'Online Simulation KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          'kits/online-simulation-kit/changelog',
          'kits/online-simulation-kit/adoption-view',
          {
            type: 'category',
            label: 'Software Development View',
            link: {
              type: 'doc',
              id: 'kits/online-simulation-kit/software-development-view'
            },
            collapsed: true,
            items: [
              {
                type: 'link',
                label: 'OSim API',
                href: 'https://eclipse-tractusx.github.io/api-hub/eclipse-tractusx.github.io/kit-osim-openAPI-2.0.0/swagger-ui/'
              }
            ]
          }
        ]
      },
      {
        type: 'category',
        label: 'Predictive Unit Real-Time Information Service KIT',
        link: {
            type: 'generated-index',
        },
        collapsed: true,
        items: [
            {
                type: 'autogenerated',
                dirName: 'kits/puris-kit',
            },
        ],
      },
      {
        type: 'category',
        label: 'Product Carbon Footprint Exchange KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/product-carbon-footprint-exchange-kit'
          }
        ]
      },
      {
        type: 'category',
        label: 'Data Driven Quality Management KIT',
        link: {
            type: 'generated-index',
        },
        collapsed: true,
        items: [
            {
                type: 'autogenerated',
                dirName: 'kits/data-driven-quality-management-kit',
            },
        ],
      },
      {
        type: 'category',
        label: 'Supply Chain Disruption Notification KIT',
        link: { type: 'generated-index' },
        collapsed: true,
        items: [
          {
            type: 'autogenerated',
            dirName: 'kits/supply-chain-disruption-notification-kit'
          }
        ]
      },
      {
        type: 'category',
        label: 'Traceability KIT',
        link: {
            type: 'generated-index',
        },
        collapsed: true,
        items: [
          {
              type: 'autogenerated',
              dirName: 'kits/traceability-kit',
          },
        ],
      }
    ]
  };

  module.exports = sidebars;
