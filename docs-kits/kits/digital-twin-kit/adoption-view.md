---
id: adoption-view
title: Adoption View
description: Digital Twin Kit
sidebar_position: 2
---

<!--
Adoption View of the Kit.
-->

![DT Kit Pictotogram](@site/static/img/kits/digital-twin/digital-twin-kit-logo.svg)

<!-- !Mandatory! -->
## Vision & Mission

### Vision

The aim of the Digital Twin Kit is to trace parts and materials across the entire value chain to enable data driven use
cases over all n-tier levels without compromising data sovereignty. This Kit enables data and app providers to deliver
solutions for building data chains and to send quality notifications on all levels and industries.

The Kits purpose is to provide the Catena-X Automotive Network with a uniform infrastructure to enable data-level
interoperability between Business Partners. Regardless of the data's provenance, the Kit sets the scene
for a comprehensive landscape of distributed Digital Twins of assets (mostly parts) along the entire lifecycle of the
supply chain.

### Mission

The Digital Twin Kit bundles the necessary standards, APIs, interaction patterns and reference implementations on how
to build a Digital Twin for an asset. By adopting established standards and integrating them, the Digital Twin Kit leverages
the conceptual and implementation work of existing communities while contributing feedback and Open-Source-Contributions
back to the public. A priority is the seamless integration with other Catena-X developments such as the
[Connector KIT](https://eclipse-tractusx.github.io/docs-kits/category/connector-kit).

### Customer Journey

With the Digital Twin Kit, all roles mentioned in the [Operating Model Whitepaper](https://catena-x.net/fileadmin/user_upload/Publikationen_und_WhitePaper_des_Vereins/CX_Operating_Modelv2.1_final.pdf)
are given the necessary tooling to format their data and APIs in a standardized manner.

<!-- !Mandatory! -->
## Business Value & Business Processes

Point-to-Point integration between Business Partners is challenging. On the one hand, all questions of sovereignty,
authorization, authentication must be agreed upon and implemented. In the Catena-X network, that is covered by the
[Connector KIT](https://eclipse-tractusx.github.io/docs-kits/category/connector-kit) and the services it relies on.

What this Kit adds is a set of technologies to reduce the integration efforts on the data level. Data Consumers can
develop their applications against data formats and interfaces that are standardized encouraging client-side reuse.
Consequently, data providers present data agnostic to who will consume the data from. This reduces the investment necessary
to onboard to additional Catena-X use-cases significantly.  Consuming applications can be substituted seamlessly as
they are developed against the relevant Catena-X standards - further lowering the bar of entry for new applications in
the ecosystem.

<!-- !Mandatory! -->
## Use Case

### Status Quo / Today’s challenge

This Kit's aim is not to solve a dedicated business problem. It is an infrastructure component, critical for scalable
data sharing and integration. It does however deliver a broad set of capabilities that the use cases can leverage, namely:

- Well-defined API structures extensible by domain models. Each use case will want to share different data but make it
available in a shared manner. (see [Submodel API](https://eclipse-tractusx.github.io/api-hub/))

- A distributed infrastructure of central and decentral components integrating on the one hand with backend-systems
in existing enterprise IT and on other hand with the Dataspace.

- Extensive meta-model to create a virtual representation of assets across their entire lifecycle.

### Example

The [Traceability Kit](https://eclipse-tractusx.github.io/docs-kits/kits/traceability-kit/adoption-view#logic--schema)
and the [Data Chain Kit](https://eclipse-tractusx.github.io/docs-kits/kits/data-chain-kit/Documentation/irs_arc42)
build on Digital Twins and leverage many of this Kit's content. The Data Chain Kit would be unimaginable without the
pre-defined endpoint- and payload-definition that is the Digital Twin Kit. Likewise,
coupling the chains' elements would be impossible without a unified hierarchical structure running with all participants.
For more information how specifically the Asset Administration Shell is used, consult the Kits.

## Additional Resources

### CX-Standards

Links open html.

- [CX - 0001 EDC Discovery API](https://catenax-ev.github.io/docs/next/standards/CX-0001-EDCDiscoveryAPI) *(version 1.0.2)*
- [CX - 0002 Digital Twins in Catena-X](https://catenax-ev.github.io/docs/next/standards/CX-0002-DigitalTwinsInCatenaX)*(version 2.2.0)*
- [CX - 0003 Semantic Aspect Meta-Model](https://catenax-ev.github.io/docs/next/standards/CX-0003-SAMMSemanticAspectMetaModel)*(version 1.1.0)*
- [CX - 0053 BPN Discovery Service](https://catenax-ev.github.io/docs/next/standards/CX-0053-BPNDiscoveryServiceAPIs) *(version 1.1.0)*

### Terminology

CX-0002 includes a figure on how the terms (also used in this Kit) interrelate. Check it out [here](https://catenax-ev.github.io/docs/next/standards/CX-0002-DigitalTwinsInCatenaX#123-asset-administration-shell)

## Notice

This work is licensed under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

- SPDX-License-Identifier: CC-BY-4.0
- SPDX-FileCopyrightText: 2023, 2024 Contributors of the Eclipse Foundation
- Source URL: [https://github.com/eclipse-tractusx/eclipse-tractusx.github.io](https://github.com/eclipse-tractusx/eclipse-tractusx.github.io)
