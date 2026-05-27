// ═══════════════════════════════════════════════════
// DATOS DEL CATÁLOGO — editá acá para agregar/modificar cursos
// ═══════════════════════════════════════════════════

const CATEGORIAS = [
  { id: "administracion", nombre: "Administración", emoji: "📋", color: "#5A1ED2" },
  { id: "admin-finanzas", nombre: "Administración y Finanzas", emoji: "💳", color: "#DC1E6E" },
  { id: "atencion", nombre: "Atención al Cliente", emoji: "🤝", color: "#BE1478" },
  { id: "cajas", nombre: "Cajas", emoji: "🛒", color: "#F02850" },
  { id: "calidad", nombre: "Control de calidad", emoji: "✅", color: "#1EAADC" },
  { id: "coto-digital", nombre: "Coto Digital", emoji: "💻", color: "#2896E6" },
  { id: "elaborados", nombre: "Elaborados", emoji: "🍞", color: "#FF8200" },
  { id: "flota", nombre: "Flota Propia", emoji: "🚚", color: "#1E5AD2" },
  { id: "frescos1", nombre: "Frescos 1", emoji: "🥩", color: "#F0281E" },
  { id: "frescos2", nombre: "Frescos 2", emoji: "🧀", color: "#FA463C" },
  { id: "gestion", nombre: "Gestión Comercial", emoji: "📈", color: "#AA1E96" },
  { id: "mantenimiento", nombre: "Mantenimiento", emoji: "🔧", color: "#00C88C" },
  { id: "no-alimentos", nombre: "No Alimentos", emoji: "🛍️", color: "#143CC8" },
  { id: "rrhh", nombre: "Recursos Humanos", emoji: "👥", color: "#7820D2" },
  { id: "salon", nombre: "Salón", emoji: "🏪", color: "#F0BE00" },
  { id: "seguridad", nombre: "Seguridad", emoji: "🛡️", color: "#646464" },
  { id: "seg-higiene", nombre: "Seguridad e Higiene", emoji: "🦺", color: "#F0A032" },
  { id: "seg-info", nombre: "Seguridad de la Información", emoji: "🔒", color: "#1E78DC" },
  { id: "medico", nombre: "Servicio Médico", emoji: "🩺", color: "#1EB4BE" },
  { id: "zonae", nombre: "ZonaE!", emoji: "⭐", color: "#1D1D1B" },
];

const CURSOS = [
  { categoria: "cajas", titulo: "Cadetes de Cajas", bajada: "Guía práctica para acompañar el trabajo diario de los cadetes en la línea de cajas.", anio: 2017, duracion: "medio", imagen: "img/Cajas-Cadetes.jpg", personas: "Cadetes de línea de cajas.", descripcion: "En este curso aprenderemos las tareas clave que realizan los cadetes durante la jornada laboral, desde la apertura y cierre de la sucursal hasta la gestión de envíos a domicilio. Abordaremos buenas prácticas de orden y limpieza, atención al cliente y uso correcto de los elementos de traslado." },
  { categoria: "cajas", titulo: "Cajas – Resolución de conflictos", bajada: "Pautas para gestionar situaciones sensibles en la línea de cajas de manera respetuosa y profesional.", anio: 2018, duracion: "medio", imagen: "img/Cajas-Resolución-Conflictos.jpg", personas: "Cajeros, Auxiliares de Cajas y Jefes de Caja.", descripcion: "En este curso aprenderemos a gestionar situaciones sensibles en la línea de cajas, especialmente al solicitar al cliente que muestre su bolso o changuito. Abordaremos estrategias de comunicación basadas en el respeto y la empatía, y cómo aplicar la normativa vigente ante una negativa." },
  { categoria: "cajas", titulo: "Envíos – Conceptos básicos", bajada: "Todo lo que necesitás saber para la gestión del circuito de envíos.", anio: 2016, duracion: "largo", imagen: "img/Cajas-Envios.jpg", personas: "Jefes, postulantes y auxiliares de Cajas.", descripcion: "Este curso presenta el circuito completo de un pedido, desde la carga de clientes en Coto Servicios hasta el seguimiento y cierre de los envíos. Se abordan los controles diarios, la gestión de pedidos pendientes y el uso de los sistemas de envíos." },
  { categoria: "cajas", titulo: "Medios de pago", bajada: "Procedimientos y buenas prácticas para el cobro en línea de cajas.", anio: 2026, duracion: "largo", imagen: "img/Cajas-Medios-de-Pago.jpg", personas: "Jefes, auxiliares y cajeros de línea de Cajas.", descripcion: "En este curso se desarrollan los medios de pago habilitados en Coto y sus medidas de seguridad. Se repasan los procedimientos de cobro con efectivo, tarjetas, documentos y billeteras virtuales, incluyendo control de validez y acreditación de identidad." },
  { categoria: "cajas", titulo: "Reconocimiento de billetes – Dólares", bajada: "Criterios básicos para identificar billetes de dólar auténticos en la línea de cajas.", anio: 2025, duracion: "largo", imagen: "img/Cajas-BDólares.jpg", personas: "Personal de línea de cajas y personas afectadas al sector o interesadas en la temática.", descripcion: "Este curso brinda nociones para reconocer los billetes de dólar en circulación, sus series y denominaciones. Se trabajan las principales medidas de seguridad, la identificación de la serie alfanumérica y los procedimientos ante la recepción de moneda extranjera." },
  { categoria: "cajas", titulo: "Reconocimiento de billetes – Euros", bajada: "Herramientas para identificar los euros auténticos y operar con seguridad.", anio: 2025, duracion: "largo", imagen: "img/Cajas-BEuros.jpg", personas: "Personal de línea de cajas y personas afectadas al sector o interesadas en la temática.", descripcion: "Este curso brinda nociones para reconocer los billetes de euro en circulación, sus series y principales diferencias. Se abordan las denominaciones aceptadas en sucursal, las medidas de seguridad vigentes e identificación de hologramas para una correcta validación durante la operatoria diaria." },
  { categoria: "cajas", titulo: "Reconocimiento de billetes – Pesos", bajada: "Una mirada práctica para identificar billetes auténticos y garantizar operaciones seguras.", anio: 2025, duracion: "largo", imagen: "img/Cajas-BPesos.jpg", personas: "Personal de línea de cajas y personas afectadas al sector o interesadas en la temática.", descripcion: "Este curso brinda nociones para reconocer los billetes de pesos en circulación, identificando sus distintas series y denominaciones. Se presentan las principales medidas de seguridad a observar al tacto, a simple vista y a trasluz, para facilitar una correcta identificación y prevenir errores durante la operatoria diaria." },
  { categoria: "frescos1", titulo: "Armado de góndola de frutas y verduras", bajada: "Criterios esenciales para el cuidado, control de calidad y exhibición de frutas y verduras.", anio: 2017, duracion: "largo", imagen: "img/Frescos1-Armados-FyV.jpg", personas: "Personal del sector Verdulería.", descripcion: "Este curso aborda los conceptos fundamentales del sector de frutas y verduras, como la clasificación de productos, la estacionalidad y los controles de calidad. Se trabajan criterios de almacenamiento, control de temperaturas y buenas prácticas de exhibición e higiene para prevenir mermas." },
  { categoria: "frescos1", titulo: "Cortes de media res - Cuarto delantero", bajada: "Técnicas de desposte y presentación de cortes del cuarto delantero.", anio: 2024, duracion: "largo", imagen: "img/Frescos1-Cuarto-Delantero.jpg", personas: "Personal del sector Frescos.", descripcion: "Este curso aborda el desposte y corte del cuarto delantero de la media res, la obtención de los principales cortes y bifes y las distintas formas de armado del bife a 10 costillas. Además, se trabaja el uso correcto de cuchilla y sierra, y los criterios básicos de higiene y calidad." },
  { categoria: "frescos1", titulo: "Cortes de media res - Cuarto trasero", bajada: "Cortes, técnicas y presentaciones del cuarto trasero de la media res.", anio: 2025, duracion: "largo", imagen: "img/Frescos1-Cuarto-Trasero.jpg", personas: "Personal del sector Frescos.", descripcion: "Este curso desarrolla técnicas de corte, limpieza y presentación del cuarto trasero de la media res, trabajando piezas internas y externas. Se estudian cortes como cuadril, peceto, nalga, tortuguita, bola de lomo y osobuco, además de emprolijado, milanesas y uso correcto de cuchilla y sierra." },
  { categoria: "frescos1", titulo: "Cortes de media res - Pecho", bajada: "Cortes, técnicas y presentaciones del pecho de la media res.", anio: 2025, duracion: "largo", imagen: "img/Frescos1-Pecho.jpg", personas: "Colaboradores, postulantes a jefes / jefes de Carnicería y gerentes de sucursal.", descripcion: "En este curso aprenderán cómo se obtienen, limpian y presentan los cortes del pecho de la media res. Nos enfocaremos en las técnicas correctas de desposte y exhibición para garantizar el correcto aprovechamiento de la pieza, cumpliendo con los estándares de calidad y frescura." },
  { categoria: "frescos1", titulo: "Desposte de media res", bajada: "Fundamentos clave para el desposte seguro y correcto de la media res.", anio: 2016, duracion: "largo", imagen: "img/Frescos1-Deposte.jpg", personas: "Personal del sector Frescos.", descripcion: "Este curso presenta los conceptos generales del desposte, abordando herramientas, elementos de seguridad, técnicas de corte y clasificación de piezas. Se aprende a distinguir cortes delanteros y pistola, junto con los cuidados necesarios para el correcto almacenamiento y conservación de la carne." },
  { categoria: "frescos1", titulo: "Frutas y verduras – Conceptos básicos", bajada: "Criterios esenciales para el cuidado, control de calidad y exhibición de frutas y verduras.", anio: 2017, duracion: "largo", imagen: "img/Frescos1-Frutas-y-Verduras.jpg", personas: "Personal del sector Verdulería.", descripcion: "Este curso aborda los conceptos fundamentales del sector de frutas y verduras, como la clasificación de productos, la estacionalidad y los controles de calidad. Se trabajan criterios de almacenamiento, control de temperaturas y buenas prácticas de exhibición e higiene para prevenir mermas." },
  { categoria: "frescos1", titulo: "Introducción al sector de Carnicería", bajada: "Conceptos básicos de recepción, producción y exhibición en el sector Carnicería.", anio: 2016, duracion: "largo", imagen: "img/Frescos-1-Intro.jpg", personas: "Personal del sector Carnicería.", descripcion: "Este curso presenta los conceptos fundamentales del sector Carnicería, incluyendo clasificación de la hacienda, recepción, almacenamiento, controles de calidad y seguridad. También aborda producción operativa, uso de maquinarias, limpieza y exhibición en mostrador y góndola." },
  { categoria: "frescos1", titulo: "Uso de la máquina ULMA – Empaquetadora", bajada: "Instrucciones clave para operar la empaquetadora ULMA de forma segura y eficiente.", anio: 2013, duracion: "corto", imagen: "img/Frescos1-M-Ulma.jpg", personas: "Personal del sector Carnicería.", descripcion: "Este curso brinda instrucciones para el uso seguro y eficiente de la empaquetadora ULMA en el sector Frescos. Aborda qué productos pueden y no pueden empaquetarse, el manejo del panel de mando, el control del sellado, las malas prácticas a evitar y los procedimientos de limpieza y verificación básica por turno." },
  { categoria: "frescos2", titulo: "Armado de picadas", bajada: "Claves para preparar picadas con buena presentación, peso y frescura.", anio: 2020, duracion: "corto", imagen: "img/Frescos2-Picadas.jpg", personas: "Personal de Quesos y Fiambres.", descripcion: "Este curso enseña el armado de picadas de quesos y fiambres, considerando bandeja, cuchillo y orden de armado. Aborda peso estándar, variedades, durabilidad y criterios de higiene y presentación, para lograr una exhibición atractiva y asegurar la aptitud de consumo en góndola." },
  { categoria: "frescos2", titulo: "Corte de quesos", bajada: "Técnicas de corte, manipulación y exhibición para quesos y dulces, priorizando seguridad, calidad y presentación.", anio: 2020, duracion: "medio", imagen: "img/Frescos2-Quesos.jpg", personas: "Personal de Quesos y Fiambres.", descripcion: "Este curso enseña técnicas correctas de corte y manipulación de quesos y dulces, diferenciando tipos, herramientas y formas de presentación. Aborda criterios de seguridad, exhibición con o sin bandeja y cuidados específicos de cada variedad, para garantizar productos frescos y bien presentados en góndola." },
  { categoria: "frescos2", titulo: "Pescadería – Exhibición de productos", bajada: "Todo lo que necesitás saber para conservar, exhibir y ordenar los productos de pescadería.", anio: 2025, duracion: "largo", imagen: "img/Frescos2-Exhibición-Pesca.jpg", personas: "Personal del sector Pescadería.", descripcion: "Este curso enseña cómo conservar y presentar correctamente los productos del sector en mostrador, heladeras y pozos. Se abordan temperaturas de referencia, clasificación, almacenamiento seguro, uso del hielo, rotación y normas de higiene, junto con prácticas a evitar para preservar la calidad." },
  { categoria: "elaborados", titulo: "Elaboración de facturas", bajada: "Lineamientos de elaboración y presentación de facturas en el sector Elaborados.", anio: 2020, duracion: "medio", imagen: "img/Elaborados-Facturas.jpg", personas: "Personal administrativo del sector Elaborados.", descripcion: "En este curso aprenderemos los lineamientos para la elaboración y presentación de facturas en el sector Elaborados, incluyendo los formatos requeridos, plazos de presentación y la documentación de respaldo necesaria." },
  { categoria: "seg-higiene", titulo: "Inducción en Seguridad e Higiene - Conceptos básicos", bajada: "Una introducción fundamental para cuidar lo más importante: las personas.", anio: 2018, duracion: "largo", imagen: "img/SegeHig-Inducción.jpg", personas: "Todo el personal de la compañía.", descripcion: "Este curso introduce los conceptos básicos de Seguridad e Higiene laboral en COTO. Aborda actos y condiciones inseguras, el uso correcto de los elementos de protección personal, señalizaciones, tipos de matafuegos y el rol de la ART, con el objetivo de concientizar sobre la prevención de riesgos." },
  { categoria: "seg-higiene", titulo: "Uso seguro del montacargas", bajada: "Las 5 normas básicas para operar montacargas sin riesgos.", anio: 2018, duracion: "corto", imagen: "img/SegeHig-Montacargas.jpg", personas: "Todo el personal de la compañía.", descripcion: "Este curso presenta las cinco normas básicas para el uso seguro del montacargas. Aborda la verificación previa del equipo, las condiciones de operación, las medidas de seguridad durante su uso y cómo actuar ante fallas o situaciones de riesgo, con el objetivo de prevenir accidentes." },
  { categoria: "salon", titulo: "Salón - Flujo del hueco", bajada: "Gestión diaria de faltantes en góndola para asegurar stock, orden y correcta exhibición.", anio: 2022, duracion: "medio", imagen: "img/Salón-Flujo-del-Hueco.jpg", personas: "Jefes y colaboradores del Salón de Ventas.", descripcion: "Este curso desarrolla el proceso diario de relevamiento y gestión de faltantes en góndola mediante PDA y reportes de GESCOM. Explica la identificación de huecos del jefe, del sistema y coincidentes, el uso de obleas, la detección de falsos stocks y los ajustes correspondientes." },
  { categoria: "salon", titulo: "Salón - N días", bajada: "Control y gestión de productos sin rotación para mejorar ventas y exhibición.", anio: 2022, duracion: "corto", imagen: "img/Salón-Ndias.jpg", personas: "Jefes y colaboradores del Salón de Ventas.", descripcion: "Este curso explica el concepto de N días y el uso del reporte para detectar productos que no registran ventas en un período determinado. Aborda la identificación de falsos stocks y problemas de exhibición, y el análisis de acciones comerciales y correctivas necesarias para asegurar la rotación." },
  { categoria: "salon", titulo: "Salón - Prioridad de reposición", bajada: "Gestión de reposición en góndola según stock y mínimos de exhibición.", anio: 2022, duracion: "medio", imagen: "img/Salón-Prioridad-Reposición.jpg", personas: "Jefes y colaboradores del Salón de Ventas.", descripcion: "Este curso explica el uso del reporte de Prioridad de Reposición para identificar productos ingresados con quiebre de stock o por debajo del MEG. Aborda la reposición inmediata según prioridades, el control permanente tras la recepción de mercadería y la impresión de obleas de precio en GESCOM." },
  { categoria: "salon", titulo: "Salón - Relevamiento de clases", bajada: "Control semanal de surtido y correcta exhibición en góndola.", anio: 2022, duracion: "medio", imagen: "img/Salón-Relevamiento-Clases.jpg", personas: "Jefes y colaboradores del Salón de Ventas.", descripcion: "Este curso explica el relevamiento semanal de clases para verificar que los productos definidos por el sistema estén correctamente exhibidos en góndola. Aborda el uso de PDA y GESCOM, el escaneo de obleas y huecos, la corrección de diferencias y el análisis del cumplimiento por departamento." },
  { categoria: "salon", titulo: "Salón - Traspasos de sucursal a 126", bajada: "Gestión de traspasos de mercadería al Centro de Devoluciones.", anio: 2022, duracion: "medio", imagen: "img/Salón-Traspasos.jpg", personas: "Colaboradores de Salón y personal de Operaciones.", descripcion: "Este curso explica el procedimiento para realizar traspasos de mercadería desde la sucursal al Centro de Devoluciones 126. Aborda la identificación de productos con convenio, la preparación y carga del traspaso en el sistema, el uso de obleas, el armado correcto de pallets y los requisitos de envío." },
  { categoria: "mantenimiento", titulo: "Circuito de Service", bajada: "Cómo gestionar correctamente los pedidos de mantenimiento en la sucursal.", anio: 2018, duracion: "medio", imagen: "img/Mantenimiento-Circuito-Service.jpg", personas: "Jefes, postulantes y empleados de línea de los sectores Mantenimiento, Administración y Operaciones.", descripcion: "Este curso enseña a gestionar los pedidos de mantenimiento en sucursal, diferenciando Service automáticos y no automáticos. Se abordan todas las etapas del proceso: generación, seguimiento, carga y control de presupuestos, supervisión, valorización y cierre." },
  { categoria: "mantenimiento", titulo: "Detección de incendios", bajada: "Conocé los sistemas, dispositivos y procedimientos para detectar y actuar ante incendios.", anio: 2013, duracion: "medio", imagen: "img/Mantenimiento-Detección-Incendios.jpg", personas: "Gerentes y jefes de sectores.", descripcion: "Este curso brinda conocimientos sobre los sistemas de detección de incendios en sucursales, abordando normativa, tipos de detectores térmicos, de humo, gas y manuales, funcionamiento de la central de alarma, señalización acústica y visual y sistemas convencionales y analógicos." },
  { categoria: "mantenimiento", titulo: "Electricidad – Conceptos básicos", bajada: "Fundamentos esenciales para comprender instalaciones eléctricas y trabajar con seguridad.", anio: 2014, duracion: "medio", imagen: "img/Mantenimiento-Básico-Electricidad.jpg", personas: "Personal de Mantenimiento y colaboradores que realicen tareas relacionadas con instalaciones eléctricas.", descripcion: "Este curso introduce los conceptos básicos de electricidad, abordando magnitudes eléctricas, tipos de corriente monofásica y trifásica, elementos de maniobra y protección, uso de instrumentos de medición y representación de circuitos para trabajar con criterio técnico y seguridad operativa." },
  { categoria: "mantenimiento", titulo: "Puesta a punto de la máquina ULMA", bajada: "Ajustes clave para garantizar el funcionamiento seguro y eficiente de la empaquetadora.", anio: 2020, duracion: "corto", imagen: "img/Mantenimiento-Puesta-Punto-ULMA.jpg", personas: "Técnicos de mantenimiento de sucursales.", descripcion: "Este curso enseña a realizar la puesta a punto de los principales componentes de la máquina ULMA, como el empujador, las plegadoras y el carro de alimentación. Se abordan los ajustes necesarios para asegurar un funcionamiento seguro, preciso y continuo del equipo." },
  { categoria: "mantenimiento", titulo: "Seguridad Eléctrica", bajada: "Fundamentos y prácticas para prevenir riesgos y trabajar con electricidad de forma segura.", anio: 2015, duracion: "largo", imagen: "img/Mantenimiento-Seguridad-Eléctrica.jpg", personas: "Personal de mantenimiento y colaboradores que realizan tareas con riesgo eléctrico.", descripcion: "Este curso aborda los riesgos asociados al trabajo con instalaciones eléctricas, como descargas, incendios y explosiones. Enseña el uso correcto de EPP, elementos de maniobra y salvataje, y repasa las 5 reglas de oro de la seguridad eléctrica." },
  { categoria: "mantenimiento", titulo: "Vehículos Industriales", bajada: "Checklist y procedimientos para operar de forma segura los principales vehículos del depósito.", anio: 2025, duracion: "corto", imagen: "img/Mantenimiento-Vehículos-Industriales.jpg", personas: "Personal de Mantenimiento y todos quienes utilizan vehículos industriales.", descripcion: "Este curso enseña a realizar los checklists diarios de los tres vehículos industriales principales: autoelevador, apilador y zorra eléctrica. Se aprende a detectar fallas a tiempo, garantizar un uso seguro, prevenir accidentes y prolongar la vida útil de los equipos." },
  { categoria: "medico", titulo: "Prevención cardiovascular", bajada: "Cómo reducir los riesgos de enfermedades cardiovasculares desde el cuidado diario.", anio: 2023, duracion: "medio", imagen: "img/ServicioMédico-Prevención-Cardio.jpg", personas: "Todos los colaboradores de COTO.", descripcion: "Este curso brinda herramientas prácticas para reducir los riesgos de enfermedades cardiovasculares desde el cuidado diario. Veremos hábitos saludables, factores de riesgo, signos de alerta y la importancia de los controles médicos periódicos." },
  { categoria: "calidad", titulo: "Inspecciones – Conceptos básicos", bajada: "Qué hacer cuando llega una inspección: procedimientos y responsabilidades.", anio: 2012, duracion: "medio", imagen: "img/Calidad-Inspecciones.jpg", personas: "Gerentes de sucursal y postulantes a Gerencia.", descripcion: "Este curso presenta los tipos de inspecciones que pueden realizar organismos gubernamentales en la sucursal y los eventos más frecuentes asociados a estos controles. Además, se detalla el procedimiento a seguir ante una inspección y las responsabilidades del gerente durante todo el proceso." },
  { categoria: "calidad", titulo: "Productos ECONOR", bajada: "Uso de equipamientos y productos ECONOR para los procesos de higiene en la sucursal.", anio: 2023, duracion: "medio", imagen: "img/Calidad-ECONOR.jpg", personas: "Personal operativo de carnicería, pescadería, verdulería, panadería, cocina, rotisería, fiambrería y salón.", descripcion: "Este curso brinda los conocimientos necesarios para utilizar correctamente los equipamientos y productos del sistema ECONOR en los procesos de higiene de la sucursal. Se abordan los distintos productos de limpieza, su aplicación específica y el funcionamiento de los dosificadores." },
  { categoria: "calidad", titulo: "Productos VICTORY", bajada: "Uso correcto de productos y equipamiento para los procesos de limpieza y desinfección.", anio: 2024, duracion: "medio", imagen: "img/Calidad-VICTORY.jpg", personas: "Personal operativo de carnicería, pescadería, verdulería, panadería, cocina, rotisería, fiambrería y salón.", descripcion: "Este curso aborda el uso adecuado de los productos del sistema VICTORY según sector, superficie y tipo de suciedad, junto con el funcionamiento de los dosificadores. Además, se trabajan los pasos correctos de limpieza y desinfección y el uso responsable de los EPP." },
  { categoria: "calidad", titulo: "Seguridad Alimentaria", bajada: "Buenas prácticas para cuidar la salud de los consumidores.", anio: 2015, duracion: "medio", imagen: "img/Calidad-Seguridad-Alimentaria.jpg", personas: "Todo el personal de la compañía (colaboradores, jefes y gerentes).", descripcion: "Este curso aborda los conceptos básicos de seguridad alimentaria, diferenciando alimentos inocuos, alterados y contaminados. Se trabajan las buenas prácticas de higiene personal y de los ambientes, la prevención de ETAs, el control de temperaturas y la correcta manipulación de los alimentos para evitar la contaminación cruzada." },
  { categoria: "coto-digital", titulo: "Armadores de Coto Digital", bajada: "Todo lo que necesitás saber para preparar pedidos de Coto Digital.", anio: 2023, duracion: "medio", imagen: "img/CotoDigital-Armadores.jpg", personas: "Personal de Coto Digital.", descripcion: "Este curso aborda el proceso completo de armado de pedidos de Coto Digital, desde la preparación inicial del armador y el uso de la PDA, hasta el picking, el manejo de faltantes y la organización por sectores. También se trabajan el pesaje, los controles finales y el cierre del pedido." },
  { categoria: "coto-digital", titulo: "Auxiliares administrativos de Coto Digital - Parte 1", bajada: "Control de activos, reservas y gestión administrativa inicial.", anio: 2025, duracion: "medio", imagen: "img/CotoDigital-Aux1.jpg", personas: "Auxiliares, postulantes a jefes y jefes de Coto Digital.", descripcion: "En este curso vas a aprender a controlar los activos del sector, gestionar las reservas y realizar los controles administrativos esenciales del área. Abordaremos la planilla de control diario, los procedimientos de facturación y resguardo de mercadería, y la solicitud de cupones." },
  { categoria: "coto-digital", titulo: "Auxiliares administrativos de Coto Digital - Parte 2", bajada: "Procesos avanzados, devoluciones y resolución de reclamos.", anio: 2025, duracion: "medio", imagen: "img/CotoDigital-Aux2.jpg", personas: "Auxiliares, postulantes a jefes y jefes de Coto Digital.", descripcion: "En este curso vamos a profundizar en los procesos administrativos del sector y el uso correcto de las herramientas de gestión. Te capacitarás en el control de órdenes de compra, diferencias de precio y manejo de la caja de devoluciones. También veremos la mesa de rendiciones y la gestión de reclamos CRM." },
  { categoria: "coto-digital", titulo: "Coto Digital - Conceptos básicos", bajada: "Cómo funciona el circuito completo de compra y entrega en Coto Digital.", anio: 2020, duracion: "medio", imagen: "img/CotoDigital-Básico.jpg", personas: "Gerentes y personal del sector Coto Digital.", descripcion: "Este curso presenta el circuito completo de un pedido en Coto Digital, desde la compra realizada por el cliente en la web o la app hasta la entrega final y la rendición. Se repasan los roles involucrados y los pasos clave del proceso, como el armado, el cobro, la logística de distribución y la entrega del pedido." },
  { categoria: "coto-digital", titulo: "Coto Digital – Picking", bajada: "Los primeros pasos para comenzar el armado de pedidos en Coto Digital.", anio: 2020, duracion: "medio", imagen: "img/CotoDigital-Picking.jpg", personas: "Gerentes y personal de Coto Digital.", descripcion: "Este curso introduce el concepto de picking y los elementos necesarios para el armado de pedidos en Coto Digital. Se aborda el uso de la PDA, la carga y seguimiento de la orden, la preparación del carrito y la lógica de armado según el layout del salón." },
  { categoria: "seg-info", titulo: "Seguridad de la Información", bajada: "Lineamientos esenciales para proteger la información y los sistemas de la compañía.", anio: 2024, duracion: "largo", imagen: "img/Seg-Info.jpg", personas: "Todos los colaboradores con acceso a sistemas y datos de la compañía.", descripcion: "Lineamientos esenciales para proteger la información y los sistemas de COTO. Abordaremos contraseñas seguras, identificación de intentos de phishing, manejo responsable de datos sensibles y buenas prácticas en el uso de dispositivos y plataformas corporativas." },
  { categoria: "flota", titulo: "Choferes de Flota Propia", bajada: "Todo lo que necesitás saber para desempeñarte como chofer de la Flota Propia de Coto Digital.", anio: 2025, duracion: "largo", imagen: "img/FlotaPropia-Choferes.jpg", personas: "Choferes de Flota Propia de Coto Digital.", descripcion: "Este curso recorre la jornada del chofer de Flota Propia, desde la asignación del móvil y los controles previos hasta la entrega de pedidos y el cierre del día. Se abordan las responsabilidades del rol, la documentación requerida, el checklist del vehículo y los procedimientos ante imprevistos." },
  { categoria: "no-alimentos", titulo: "NOA - Prioridad de reposición", bajada: "Herramientas y criterios para asegurar stock y góndolas completas en No Alimentos.", anio: 2024, duracion: "medio", imagen: "img/NOA-Prioridad-Reposición.jpg", personas: "Colaboradores del sector NOA, Electro y responsables de Salón.", descripcion: "Este curso explica cómo utilizar el Reporte de Prioridad de Reposición para identificar productos agotados o con bajo stock y definir qué reponer primero en góndola. Introduce el concepto de MEG (Mínimo de Exhibición en Góndola) y los modos de consulta del reporte." },
  { categoria: "no-alimentos", titulo: "NOA - Relevamiento de clases", bajada: "Control de exhibición y disponibilidad en No Alimentos.", anio: 2025, duracion: "largo", imagen: "img/NOA-RelevamientoClases.jpg", personas: "Colaboradores, postulantes a jefes y jefes de NOA (Electro, Hogar y Textil).", descripcion: "En este curso aprenderás a verificar que los productos de Electro, Hogar y Textil estén correctamente exhibidos y disponibles para la venta. Te capacitaremos en el uso de GESCOM, Sucursales 3 y la PDA para realizar el relevamiento semanal de clases." },
  { categoria: "no-alimentos", titulo: "Ventas – Conceptos básicos", bajada: "Herramientas y técnicas para una atención efectiva y orientada al cierre.", anio: 2015, duracion: "medio", imagen: "img/NOA-BásicoVentas.jpg", personas: "Colaboradores y jefes de bazar, electrodomésticos y atención al cliente.", descripcion: "Este curso presenta las etapas del proceso de venta, desde la bienvenida hasta la despedida, incluyendo indagación, asesoramiento, manejo de objeciones, cierre y venta adicional. Brinda técnicas de comunicación para adaptarse a distintos perfiles de clientes." },
  { categoria: "rrhh", titulo: "Administración de Recursos Humanos - 1", bajada: "Procedimientos y criterios para gestionar ingresos de personal en sucursal.", anio: 2023, duracion: "largo", imagen: "img/RRHH-Cap1.jpg", personas: "Auxiliares de Administración de Recursos Humanos en sucursales.", descripcion: "Este curso aborda el proceso de ingreso de personal en la sucursal, desde la gestión del requerimiento hasta el seguimiento del período de prueba. Incluye recepción del nuevo empleado, verificación de documentación, inducción, entrega de uniformes y EPP, y cierre administrativo." },
  { categoria: "rrhh", titulo: "Administración de Recursos Humanos – 2", bajada: "Planificación horaria, vacaciones y gestión operativa en SAP.", anio: 2024, duracion: "largo", imagen: "img/RRHH-Cap2.jpg", personas: "Auxiliares de Administración de Recursos Humanos en sucursales.", descripcion: "Este curso aborda la planificación horaria y de vacaciones del personal, desde la carga web y sus etapas de aprobación hasta su imputación en SAP. Incluye modalidades de contrato, control de francos, cambios de horario, notificación al personal y liquidación de vacaciones." },
  { categoria: "rrhh", titulo: "Manual de Recursos Humanos – 3", bajada: "Control de fichadas, ausencias y seguimiento operativo del personal.", anio: 2018, duracion: "largo", imagen: "img/RRHH-Cap3.jpg", personas: "Auxiliares de Administración de Recursos Humanos en sucursales.", descripcion: "Este curso aborda la gestión integral del control de personal en sucursal. Incluye el tratamiento de errores de fichadas, control de jornada y horas extras, emisión y uso de ficha rosa, carga y seguimiento de ausencias en SAP, control de libretas sanitarias y elaboración de informes periódicos de RRHH." },
  { categoria: "rrhh", titulo: "Manual de Recursos Humanos – 4", bajada: "Criterios y procedimientos para el régimen disciplinario en sucursal.", anio: 2018, duracion: "corto", imagen: "img/RRHH-Cap4.jpg", personas: "Auxiliares de Administración de Recursos Humanos en las sucursales.", descripcion: "Este curso describe los principios del régimen disciplinario, los distintos tipos de faltas y sanciones, y cómo deben redactarse, cargarse y archivar. También se abordan los criterios de aplicación y las instancias de reunión vinculadas a la gestión de sanciones." },
  { categoria: "rrhh", titulo: "Manual de Recursos Humanos – 5", bajada: "Procedimientos ante accidentes laborales y uso adecuado del botiquín.", anio: 2018, duracion: "corto", imagen: "img/RRHH-Cap5.jpg", personas: "Auxiliares de Administración de Recursos Humanos y responsables de área en las sucursales.", descripcion: "Este curso presenta los pasos a seguir ante un accidente de trabajo, incluyendo la clasificación de incidentes, qué se considera una enfermedad profesional y el rol del botiquín en la atención inicial. Una guía fundamental para actuar con rapidez y criterio ante situaciones imprevistas." },
  { categoria: "rrhh", titulo: "Manual de Recursos Humanos – 6", bajada: "Cómo actuar correctamente frente a una inspección.", anio: 2018, duracion: "corto", imagen: "img/RRHH-Cap6.jpg", personas: "Auxiliares de Administración de Recursos Humanos y responsables operativos.", descripcion: "Este curso detalla qué organismos pueden presentarse en la sucursal y cuál es el procedimiento adecuado a seguir durante una inspección. Brinda herramientas para garantizar una respuesta clara, ordenada y alineada con la normativa vigente." },
  { categoria: "rrhh", titulo: "Manual de Recursos Humanos – 7", bajada: "Control de pre-liquidación y entrega de recibos.", anio: 2018, duracion: "corto", imagen: "img/RRHH-Cap7.jpg", personas: "Auxiliares de Administración de Recursos Humanos en las sucursales.", descripcion: "Este curso detalla los aspectos fundamentales del proceso de pre-liquidación: desde la pérdida de premio y el control de frío, hasta la apertura y cierre de jornada, el control de preliquidación y la entrega de recibos al personal." },
  { categoria: "rrhh", titulo: "Manual de Recursos Humanos – 8", bajada: "Procedimientos para gestionar correctamente el egreso del personal.", anio: 2018, duracion: "corto", imagen: "img/RRHH-Cap8.jpg", personas: "Auxiliares de Administración de Recursos Humanos y responsables de área en las sucursales.", descripcion: "Este curso aborda las tareas relacionadas con la baja de un colaborador: tipos de egreso, carga en sistema, devolución de indumentaria y generación del listado de bajas. Una guía práctica para asegurar que el cierre del vínculo laboral se realice de forma ordenada y conforme a los procedimientos establecidos." },
  { categoria: "gestion", titulo: "Estudio de casos: Clavos", bajada: "Aprendé a identificar y gestionar productos que no rotan para optimizar la venta en sucursales.", anio: 2016, duracion: "medio", imagen: "img/GestComercial-Clavos.jpg", personas: "Personal del área Comercial.", descripcion: "Este curso enseña a identificar \"clavos\" o productos sin rotación mediante el uso de iPad y sistema VACA. Se analiza rotación, stock, kardex, precios y relevamientos, y se aplican soluciones específicas según cada caso, con ejemplos prácticos basados en situaciones reales de sucursales." },
  { categoria: "gestion", titulo: "Gestión Comercial – Conceptos básicos", bajada: "Conocé los procesos, herramientas y estrategias que permiten organizar y optimizar la gestión comercial en Coto.", anio: 2014, duracion: "largo", imagen: "img/GestComercial-Básico.jpg", personas: "Personal de los sectores comerciales y de Administración.", descripcion: "Este curso introduce los fundamentos de la gestión comercial, abordando mantenimiento de artículos, uso de PLU, definición de surtido y reposición, manejo y control de stock, valorización y análisis de precios y competencia, utilizando herramientas internas y sistemas de la compañía." },
  { categoria: "gestion", titulo: "Panel de control", bajada: "Conocé cómo usar Panel de Control para visualizar y tomar decisiones basadas en las ventas.", anio: 2018, duracion: "corto", imagen: "img/GestComercial-Panel-Control.jpg", personas: "Personal del área Comercial.", descripcion: "Este curso introduce la aplicación Panel de Control en iPad, enseñando a visualizar y comparar ventas a distintos niveles: cadena, sucursal, grupo comercial, departamento, clase, proveedor y PLU. Se aprende a navegar la información e interpretar indicadores para optimizar la toma de decisiones comerciales." },
  { categoria: "gestion", titulo: "Uso de aplicativo – Sucursales 3", bajada: "Herramienta clave para controlar mercadería, rotación y surtido de tu sucursal desde el iPad.", anio: 2019, duracion: "corto", imagen: "img/GestComercial-Suc3.jpg", personas: "Gerentes de Sucursal.", descripcion: "Este curso muestra cómo utilizar el módulo Surtido de Sucursales3 en iPad para consultar y analizar datos de stock, frecuencia de venta y disponibilidad de productos. Se trabaja la interpretación de la información para tomar decisiones estratégicas sobre surtido, rotación y reposición." },
  { categoria: "admin-finanzas", titulo: "Contrato de la tarjeta TCI", bajada: "Guía práctica para asistir al cliente en la correcta confección del contrato de la Tarjeta TCI.", anio: 2025, duracion: "medio", imagen: "img/TCI-Contrato.jpg", personas: "Jefes y Auxiliares de Cajas.", descripcion: "En este curso aprenderemos cómo asistir al cliente en la correcta confección del contrato de la Tarjeta TCI y su documentación anexa. Abordaremos las partes del contrato, las firmas requeridas, los controles a realizar y el correcto cierre, envío y resguardo del legajo en la sucursal." },
  { categoria: "admin-finanzas", titulo: "Uso del aplicativo – Tarjeta TCI", bajada: "Gestión integral de solicitudes y consultas de Tarjeta TCI desde el aplicativo.", anio: 2025, duracion: "medio", imagen: "img/TCI-Aplicativo.jpg", personas: "Jefes y Auxiliares de Cajas.", descripcion: "En este curso aprenderemos a utilizar el aplicativo TCI para gestionar solicitudes de Tarjeta TCI, desde la carga de clientes hasta el seguimiento de estados y la atención de consultas frecuentes. Abordaremos cómo actuar ante los distintos resultados de una solicitud para acompañar correctamente cada trámite." },
  { categoria: "admin-finanzas", titulo: "Prevención de LA/FT/FP", bajada: "Gestión de riesgos y cumplimiento normativo para Tarjeta Coto Inteligente.", anio: 2025, duracion: "corto", imagen: "img/TCI-Prevencion.jpg", personas: "Directores, gerentes, jefaturas y colaboradores cuyas funciones impacten en la TCI.", descripcion: "En este curso conocerás las obligaciones, responsabilidades y procedimientos vinculados a la prevención del Lavado de Activos (LA), Financiación del Terrorismo (FT) y de la Proliferación (FP). Su objetivo es asegurar el cumplimiento del marco legal y regulatorio vigente en la operatoria de la Tarjeta Coto Inteligente." },
  { categoria: "seguridad", titulo: "Controles para modalidades de hurto", bajada: "Prevención, detección y control de hurtos en sucursal.", anio: 2024, duracion: "largo", imagen: "img/Seguridad-Modalidades-Hurto.jpg", personas: "Personal de Seguridad en sucursales.", descripcion: "Este curso desarrolla las principales modalidades de hurto detectadas en cajas, salón y otras cadenas, como changos con doble fondo, bolsas preparadas, mecheros, cambio de etiquetas y hurtos combinados. Además, aborda los controles clave de seguridad, incluyendo rondines, conteo de críticos y jaula de productos sensibles." },
  { categoria: "seguridad", titulo: "Recepciones del Centro de Distribución", bajada: "Control y trazabilidad en la recepción de mercadería desde el CD.", anio: 2013, duracion: "largo", imagen: "img/Seguridad-Recepción-CD.jpg", personas: "Personal de Seguridad, Jefes y Gerentes de Sucursal.", descripcion: "Este curso explica el procedimiento de recepción de móviles provenientes del Centro de Distribución, abordando el control de documentación, precintos y obleas, la descarga de pallets y cubetas, el registro de ingresos y egresos, y el uso de PDA y GPS para asegurar una recepción ordenada y con trazabilidad completa." },
  { categoria: "seguridad", titulo: "Recepción de proveedores", bajada: "Procedimiento estandarizado para una recepción de mercadería precisa y controlada.", anio: 2016, duracion: "medio", imagen: "img/Seguridad-Recepción-Prov.jpg", personas: "Gerentes, Jefes de Operaciones, Jefes de Recepción, Fiscalizadores y Recepcionistas.", descripcion: "Este curso explica el procedimiento completo para la recepción de mercadería de proveedores directos. Aborda las etapas de carga de orden de compra, descarga y control de mercadería, registro de embalajes, confirmación del pedido, gestión de devoluciones y salida del proveedor." },
  { categoria: "seguridad", titulo: "Seguridad - Puestos en Sucursal", bajada: "Funciones, responsabilidades y controles del personal de Seguridad en la sucursal.", anio: 2021, duracion: "largo", imagen: "img/Seguridad-Puestos.jpg", personas: "Gerentes, Jefes de Operaciones, Jefes de Recepción, Fiscalizadores y Recepcionistas.", descripcion: "Este curso presenta los distintos puestos del sector Seguridad en la sucursal y sus responsabilidades operativas. Aborda funciones de control en recepción, salón, cajas, electro, bodega, playa y CCTV, incluyendo manejo de productos críticos, alarmado, rondines y coordinación con otras áreas." },
  { categoria: "zonae", titulo: "Anfitriones de Zona E!", bajada: "Herramientas y conocimientos clave para brindar una experiencia de juego segura, ordenada y de calidad.", anio: 2014, duracion: "largo", imagen: "img/Zona-Anfitriones.jpg", personas: "Anfitriones de Zona E, Cajeros y Jefes.", descripcion: "Este curso está orientado a anfitriones de Zona Entretenimientos y desarrolla las funciones clave del rol. Aborda las tareas diarias, la apertura y cierre del sector, el cruce de seguridad y el conocimiento del funcionamiento y ubicación de los juegos, con foco en la atención al cliente y el trato cordial." },
  { categoria: "zonae", titulo: "Camareros de Zona Gourmet", bajada: "Cómo brindar una excelente atención al cliente en el sector de Zona Gourmet.", anio: 2024, duracion: "largo", imagen: "img/Zona-Camareros.jpg", personas: "Camareros de Zona Gourmet.", descripcion: "Este curso introduce a los camareros en la experiencia Zona Gourmet y los objetivos del rol. Aborda los preparativos de inicio y cierre de jornada y desarrolla los 16 pasos de la atención al cliente, desde la bienvenida y toma del pedido hasta el cobro, la despedida y la limpieza final de la mesa." },
  { categoria: "zonae", titulo: "Curso de Cumpleaños de Zona E!", bajada: "¡Todo lo que necesitás para ser un gran anfitrión en los Cumples de Zona E!", anio: 2024, duracion: "medio", proximamente: true, imagen: "img/Zona-Cumples.jpg", personas: "Anfitriones de Zona E.", descripcion: "En este curso conocerás las propuestas de Zona Cumples y cómo comunicarlas de forma clara a los clientes. Se desarrollan las 5 etapas del cumple —venta, contratación, preparación, día del evento y post cumple— y las tareas clave en cada una, reforzando la importancia de una atención al cliente de calidad en todo el proceso." },

  { categoria: "administracion", titulo: "Administración de personal - Operatoria de cajas", bajada: "Organizá tu equipo y asegurá la cobertura de la línea de cajas.", anio: 2016, duracion: "medio", imagen: "img/Administración-Operatoria-Cajas.jpg", personas: "Postulantes a Auxiliar, Auxiliares, postulantes a Jefe de Caja y Jefes de Caja.", descripcion: "Este curso reúne las tareas vinculadas a la administración del personal de Cajas en la sucursal. Aprendemos a calcular y controlar el FTE, generar requerimientos de dotación y cargar horarios web. Además, abordamos la organización diaria de cajeros y el uso de herramientas clave como reuniones de equipo e informes de transferencia de sector." },
  { categoria: "administracion", titulo: "Análisis de mermas", bajada: "Identificá causas, circuitos y estándares para interpretar los reportes de merma.", anio: 2016, duracion: "medio", imagen: "img/Administración-Mermas.jpg", personas: "Gerentes, Jefes de todos los sectores y empleados de Administración.", descripcion: "Este curso brinda las herramientas necesarias para comprender qué es una merma, cómo se calcula y cuáles son sus causas, tanto naturales como no naturales. Aprendemos a leer e interpretar los reportes del circuito de análisis, desde la detección de desvíos hasta la elaboración del informe y el seguimiento de los resultados en la sucursal." },
  { categoria: "administracion", titulo: "Cajas - Apertura del sector", bajada: "Un repaso por las tareas necesarias para abrir correctamente el sector de cajas antes de la atención al público.", anio: 2016, duracion: "medio", imagen: "img/Administración-Apertura-Cajas.jpg", personas: "Jefes de Administración y Cajas.", descripcion: "Este curso guía el procedimiento de apertura para que todo esté listo antes de recibir al cliente. Repasamos el inicio de la jornada: encendido y control de terminales, validación de precios y promociones, gestión del fondo fijo, registro de novedades del sector y verificación del correcto funcionamiento de las cajas de autocobro." },
  { categoria: "administracion", titulo: "Qué es un inventario", bajada: "Conceptos fundamentales para comprender el inventario y su impacto en la gestión diaria de la sucursal.", anio: 2020, duracion: "medio", imagen: "img/Administración-Qué-es-Inventario.jpg", personas: "Auxiliares y Jefes de Administración y Jefes de todos los sectores.", descripcion: "En este curso abordamos la diferencia entre stock físico y stock teórico, y cómo realizar conteos mediante RF o PDA, considerando el impacto de ventas, recepciones y decomisos. Además, analizamos por qué un inventario correctamente ejecutado es clave para detectar desvíos y tomar decisiones operativas acertadas." },
  { categoria: "administracion", titulo: "Stock - Conceptos básicos", bajada: "Introducción al circuito de la mercadería y a los principios fundamentales de la gestión de stock.", anio: 2015, duracion: "largo", imagen: "img/Administración-Conceptos.jpg", personas: "Auxiliares y Jefes de Administración, Gerentes de Sucursales y Jefes de todos los sectores.", descripcion: "En este curso aprenderemos qué es el stock y cómo funciona el circuito de la mercadería desde el pedido hasta la venta. Abordaremos los conceptos generales, los movimientos de stock y los estados en los que puede encontrarse la mercadería, junto con el rol del sistema GDM y su interacción con otros sistemas para el análisis y control del stock." },
  { categoria: "administracion", titulo: "Tipos de inventario", bajada: "Un recorrido por los distintos tipos de inventarios que utilizamos en Coto y su planificación.", anio: 2020, duracion: "largo", imagen: "img/Administración-Tipo-Inventario.jpg", personas: "Auxiliares y Jefes de Administración, Gerentes de Sucursal y Jefes de todos los sectores.", descripcion: "Aquí aprendemos a identificar los dos grandes grupos de inventarios (parciales y totales), sus objetivos, formas de ejecución y responsables. Vemos ejemplos como rebalance, inventarios críticos, falsos stocks y sorpresas. Además, distinguimos los niveles de planificación y analizamos qué tipo de toma corresponde a cada situación." },
  { categoria: "administracion", titulo: "Uso de balanzas", bajada: "Funcionamiento del sistema de balanzas y procesos de actualización de precios en la sucursal.", anio: 2019, duracion: "medio", imagen: "img/Administración-Balanzas.jpg", personas: "Gerentes de Sucursal, Jefes de todos los sectores y Personal de Administración.", descripcion: "En este curso nos enfocaremos en el sistema de balanzas, su funcionamiento y los distintos tipos de actualización de precios. Abordaremos los procesos de Novedades, Cambios Online, Total y Completo, y aprenderemos cómo actuar ante una desactualización de precios en la sucursal. El objetivo es garantizar que los precios se mantengan siempre actualizados." },
  { categoria: "administracion", titulo: "Introductorio de toma de inventario", bajada: "Bases para el control de stock y prevención de mermas.", anio: 2025, duracion: "largo", imagen: "img/Administración-Introductorio.jpg", personas: "Todos los colaboradores, postulantes a jefes, jefes y gerentes de Sucursal.", descripcion: "En este curso aprenderán las bases teóricas y prácticas para realizar inventarios correctos. Veremos la diferencia entre stock físico y teórico para evitar mermas, los tipos de inventarios generales y parciales, y cómo la planificación asegura la disponibilidad de mercadería en cada sucursal." },
  { categoria: "administracion", titulo: "Toma de inventario - Electro", bajada: "Bases para el control de stock y prevención de mermas.", anio: 2026, duracion: "largo", imagen: "img/Administración-TI-Electro.jpg", personas: "Colaboradores del sector Electro, postulantes a jefes, jefes y gerentes de Sucursal.", descripcion: "En este curso se abordan los conceptos fundamentales del inventario aplicados al sector Electro. Se desarrollan nociones de stock, su clasificación, la diferencia entre stock real y distorsionado, los tipos de inventarios y la planificación necesaria para una correcta organización del proceso." },

  { categoria: "atencion", titulo: "Conociendo al Cliente", bajada: "Herramientas prácticas para mejorar la calidad de atención y el vínculo con el cliente.", anio: 2013, duracion: "largo", imagen: "img/At_cliente.jpg", personas: "Jefes de sectores, Postulantes, Personal de línea y Personal de atención al cliente.", descripcion: "En este curso trabajaremos las habilidades blandas necesarias para brindar una atención de calidad, poniendo el foco en la escucha activa, la empatía y la comunicación clara. Analizaremos distintos perfiles de clientes y cómo responder de forma adecuada ante consultas, reclamos y situaciones de conflicto, fortaleciendo el vínculo y la experiencia de atención." },
];
/**
 * CATÁLOGO E-LEARNING — COTO CICSA
 * app.js · Edición 2026 · v27
 *
 * ────────────────────────────────────────────────
 * ESTRUCTURA DE ESTE ARCHIVO:
 *   1. CATEGORIAS + CURSOS   → arrays con todos los datos (editá acá)
 *   2. renderCatnav / renderIndex / renderCourses  → builders del DOM
 *   3. initTheme, initModal, initSearch, etc.       → módulos de comportamiento
 *   4. DOMContentLoaded                              → orquestador
 *
 * Para agregar/modificar un curso: editá CURSOS al inicio del archivo.
 * Para agregar/modificar una categoría: editá CATEGORIAS al inicio.
 * ────────────────────────────────────────────────
 */

'use strict';

/* ─── Detección de entorno ─────────────────────────────────── */
const IS_TOUCH = window.matchMedia('(hover: none)').matches;
const IS_MOBILE = () => window.innerWidth < 901;

/* Labels de duración legibles */
const DURACION_LABELS = {
  corto: 'Curso corto',
  medio: 'Curso medio',
  largo: 'Curso largo'
};


/* ============================================================
   RENDER 1 — Catnav (barra horizontal de categorías)
============================================================ */
function renderCatnav() {
  const scroll = document.getElementById('catnav-scroll');
  if (!scroll) return;

  // Etiquetas cortas para que entren mejor en la barra
  const SHORT_NAMES = {
    'seg-higiene':  'Seg. e Higiene',
    'medico':       'Serv. Médico',
    'seg-info':     'Seg. Info',
    'gestion':      'Gest. Comercial',
    'atencion':     'Atención',
    'administracion': 'Adm.',
    'no-alimentos': 'No Aliment.',
    'mantenimiento': 'Manten.',
    'coto-digital': 'Coto Dig.',
  };

  let html = `<span class="catnav-label" aria-hidden="true">Ir a:</span>`;
  html += CATEGORIAS.map(cat => {
    const count = CURSOS.filter(c => c.categoria === cat.id).length;
    const label = SHORT_NAMES[cat.id] || cat.nombre;
    return `<a href="#${cat.id}" title="${escAttr(cat.nombre)} (${count} curso${count !== 1 ? 's' : ''})">${cat.emoji} ${escHtml(label)}</a>`;
  }).join('');

  scroll.innerHTML = html;
}


/* ============================================================
   RENDER 2 — Índice de cursos
============================================================ */
function renderIndex() {
  const grid = document.getElementById('indexGrid');
  if (!grid) return;

  // Salón usa texto oscuro porque el amarillo no contrasta con blanco
  const DARK_TEXT_CATS = new Set(['salon']);

  grid.innerHTML = CATEGORIAS.map(cat => {
    const cursos = CURSOS.filter(c => c.categoria === cat.id);
    if (cursos.length === 0) return '';

    const textColor = DARK_TEXT_CATS.has(cat.id) ? ' color:#1f2d46;' : '';

    return `
      <div class="index-card">
        <div class="index-card-header" style="background:${cat.color};${textColor}">
          <h3>${cat.emoji} ${escHtml(cat.nombre)}</h3>
          <span>${cursos.length} curso${cursos.length !== 1 ? 's' : ''}</span>
        </div>
        <ul>
          ${cursos.map(c => `
            <li><a href="#${cat.id}">${escHtml(c.titulo)}</a></li>
          `).join('')}
        </ul>
      </div>
    `;
  }).join('');
}


/* ============================================================
   RENDER 3 — Categorías + cards de curso
============================================================ */
function renderCourses() {
  const container = document.getElementById('coursesContainer');
  if (!container) return;

  container.innerHTML = CATEGORIAS.map(cat => {
    const cursos = CURSOS.filter(c => c.categoria === cat.id);
    if (cursos.length === 0) return '';

    return `
      <div class="category-block anim-fadein"
           id="${cat.id}"
           style="--cat-main:${cat.color};">
        <div class="cat-header">
          <span class="cat-header-pill" style="background:${cat.color};">${escHtml(cat.nombre)}</span>
          <span class="cat-header-count" style="background:${cat.color};">${cursos.length} curso${cursos.length !== 1 ? 's' : ''}</span>
        </div>

        <div class="courses-grid">
          ${cursos.map(c => renderCard(c, cat, CURSOS.indexOf(c))).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderCard(c, cat, id) {
  const durLabel = c.duracion ? (DURACION_LABELS[c.duracion] || c.duracion) : '';
  const hasPersonas = (c.personas || '').trim() !== '';
  const hasDesc = (c.descripcion || '').trim() !== '';
  const showExtra = hasPersonas || hasDesc;

  const imgSrc = c.imagen.replace(/\.jpe?g$/i, '.webp');

  return `
    <article class="course-card" tabindex="0" role="button" data-curso-id="${id}" aria-label="Ver detalle de ${escAttr(c.titulo)}">
      <div class="course-cover">
        <img class="course-cover-img"
             src="${escAttr(imgSrc)}"
             alt="${escAttr(c.alt || c.titulo)}"
             width="837" height="507"
             loading="lazy"
             decoding="async">
        <div class="course-cover-overlay">
          <div class="course-cat-chip">
            <span class="course-cat-chip-dot" style="background:${cat.color};"></span>
            ${escHtml(cat.nombre)}
          </div>
        </div>
      </div>
      <div class="course-body">
        <div class="course-title">${escHtml(c.titulo)}${c.proximamente ? ' <span class="proximamente">Próximamente</span>' : ''}</div>
        <div class="course-bajada">${escHtml(c.bajada)}</div>
        <div class="course-meta">
          ${c.anio ? `<span class="meta-tag anio" title="Año de revisión del contenido"><span class="meta-tag-label">Año</span> ${c.anio}</span>` : ''}
          ${c.duracion ? `<span class="meta-tag duracion dur-${c.duracion}">${escHtml(durLabel)}</span>` : ''}
        </div>
        ${showExtra ? `
        <div class="course-card-extra">
          ${hasPersonas ? `<div class="course-personas"><strong>Personas asignadas:</strong> ${escHtml(c.personas)}</div>` : ''}
          ${hasDesc ? `<div class="course-desc">${escHtml(c.descripcion)}</div>` : ''}
        </div>` : ''}
      </div>
    </article>
  `;
}

/* Helpers de escape para evitar XSS si en el futuro hay caracteres especiales */
function escHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
function escAttr(s) {
  return escHtml(s).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}


/* ============================================================
   initTheme — modo oscuro con persistencia y sistema
   Hay dos toggles: el FAB flotante (siempre visible) y
   el del menú hamburguesa mobile.
============================================================ */
function initTheme() {
  const fab = document.getElementById('darkFab');
  const fabIcon = document.getElementById('darkFabIcon');
  const mobileBtn = document.getElementById('mobileDarkToggle');
  const mobileIcon = document.getElementById('mobileDarkIcon');
  const root = document.documentElement;

  function setTheme(dark) {
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    fab?.setAttribute('aria-pressed', String(dark));
    mobileBtn?.setAttribute('aria-pressed', String(dark));
    if (fabIcon) fabIcon.textContent = dark ? '🌙' : '☀️';
    if (mobileIcon) mobileIcon.textContent = dark ? '🌙' : '☀️';
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (_) {}
  }

  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (_) {}
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(saved === 'dark' || (!saved && prefersDark));

  const handleToggle = () => setTheme(root.getAttribute('data-theme') !== 'dark');
  fab?.addEventListener('click', handleToggle);
  mobileBtn?.addEventListener('click', handleToggle);
}


/* ============================================================
   initMobileMenu — menú hamburguesa (NUEVO)
============================================================ */
function initMobileMenu() {
  const burger = document.getElementById('navBurger');
  const menu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (!burger || !menu) return;

  function open() {
    menu.classList.add('open');
    backdrop?.classList.add('open');
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    menu.classList.remove('open');
    backdrop?.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', () => {
    menu.classList.contains('open') ? close() : open();
  });
  backdrop?.addEventListener('click', close);

  /* Cerrar al hacer click en cualquier link del menú */
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  /* Cerrar con ESC */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) close();
  });

  /* Si la ventana se agranda a desktop, cerrar el menú */
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 901 && menu.classList.contains('open')) close();
  });
}





/* ============================================================
   initModal — modal de detalle con accesibilidad
============================================================ */
function initModal() {
  const overlay = document.getElementById('courseModal');
  const modalImg = document.getElementById('modalImg');
  const modalCat = document.getElementById('modalCat');
  const modalTitle = document.getElementById('modalTitle');
  const modalBajada = document.getElementById('modalBajada');
  const modalMeta = document.getElementById('modalMeta');
  const modalPers = document.getElementById('modalPersonas');
  const modalDesc = document.getElementById('modalDesc');
  const modalBody = document.getElementById('modalBody');
  const btnClose = document.getElementById('modalClose');
  const btnBack = document.getElementById('modalCloseBtn');
  const waBtn = document.getElementById('modalWaBtn');

  if (!overlay) return;

  let lastFocused = null;

  function open(card) {
    const id = Number(card.dataset.cursoId);
    const c = CURSOS[id];
    if (!c) return;
    const cat = CATEGORIAS.find(x => x.id === c.categoria);
    const color = cat?.color || '#097bb3';

    modalImg.src = c.imagen.replace(/\.jpe?g$/i, '.webp');
    modalImg.alt = c.alt || c.titulo;

    modalCat.innerHTML = cat
      ? `<span class="course-cat-chip-dot" style="background:${color};"></span> ${escHtml(cat.nombre)}`
      : '';
    modalTitle.textContent = c.titulo;
    modalBajada.textContent = c.bajada || '';

    const durLabel = c.duracion ? (DURACION_LABELS[c.duracion] || c.duracion) : '';
    modalMeta.innerHTML = [
      c.anio ? `<span class="meta-tag anio" title="Año de revisión del contenido"><span class="meta-tag-label">Año</span> ${c.anio}</span>` : '',
      c.duracion ? `<span class="meta-tag duracion dur-${c.duracion}">${escHtml(durLabel)}</span>` : ''
    ].join('');

    if (c.personas && c.personas.trim()) {
      modalPers.innerHTML = `<strong>Personas asignadas:</strong> ${escHtml(c.personas)}`;
      modalPers.style.display = '';
    } else {
      modalPers.style.display = 'none';
    }

    if (c.descripcion && c.descripcion.trim()) {
      modalDesc.textContent = c.descripcion;
      modalDesc.style.display = '';
    } else {
      modalDesc.textContent = '';
      modalDesc.style.display = 'none';
    }

    modalBody.style.setProperty('--modal-color', color);

    if (waBtn) {
      const msg = encodeURIComponent(`Hola, me interesa realizar este curso e-learning: "${c.titulo}". ¿Me podés dar más información?`);
      waBtn.href = `https://wa.me/5491170819432?text=${msg}`;
    }

    lastFocused = document.activeElement;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    btnClose?.focus();
  }

  function close() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocused?.focus();
  }

  /* Event delegation sobre el contenedor de cursos */
  document.querySelector('.courses-section')?.addEventListener('click', e => {
    if (e.target.closest('a')) return;
    const card = e.target.closest('.course-card');
    if (card) open(card);
  });

  /* También abrir con Enter o Space (las cards son tabbables) */
  document.querySelector('.courses-section')?.addEventListener('keydown', e => {
    const card = e.target.closest('.course-card');
    if (!card) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      open(card);
    }
  });

  btnClose?.addEventListener('click', close);
  btnBack?.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') { close(); return; }

    /* Focus trap: el Tab cicla solo entre elementos del modal */
    if (e.key === 'Tab') {
      const focusables = overlay.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}


/* ============================================================
   initSearch — buscador con highlight y contador
   Sincroniza el buscador del topnav y el del menú mobile.
============================================================ */
function initSearch() {
  const inputDesktop = document.getElementById('navSearch');
  const inputMobile = document.getElementById('mobileSearch');
  const noResults = document.querySelector('.no-results');

  if (!inputDesktop && !inputMobile) return;

  const FIELDS = ['.course-title', '.course-bajada', '.course-personas'];
  const originals = new Map();

  /* Capturamos snapshots DESPUÉS del render dinámico */
  document.querySelectorAll('.course-card').forEach(card => {
    const snap = {};
    FIELDS.forEach(sel => {
      const el = card.querySelector(sel);
      if (el) snap[sel] = el.innerHTML;
    });
    originals.set(card, snap);
  });

  function normalize(str) {
    return (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function highlightText(html, query) {
    if (!query) return html;
    const esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${esc})`, 'gi');
    return html.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  function applyHighlight(q) {
    document.querySelectorAll('.course-card').forEach(card => {
      const snap = originals.get(card);
      if (!snap) return;
      FIELDS.forEach(sel => {
        const el = card.querySelector(sel);
        if (el && snap[sel] != null) el.innerHTML = q ? highlightText(snap[sel], q) : snap[sel];
      });
    });
  }

  function applyFilters(rawQuery) {
    const q = normalize(rawQuery);
    let total = 0;

    document.querySelectorAll('.category-block').forEach(block => {
      let visible = 0;
      block.querySelectorAll('.course-card').forEach(card => {
        const show = !q || normalize(card.textContent).includes(q);
        card.classList.toggle('hidden', !show);
        if (show) visible++;
      });
      block.classList.toggle('hidden', visible === 0);
      total += visible;
    });

    if (noResults) noResults.classList.toggle('visible', total === 0);
    applyHighlight(rawQuery.trim());
  }

  /* Sincronización entre los dos inputs (desktop + mobile) — con debounce */
  let debounceTimer = null;
  function debouncedFilter(value) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => applyFilters(value), 120);
  }

  function bindInput(input, other) {
    if (!input) return;
    input.addEventListener('input', () => {
      if (other) other.value = input.value;
      debouncedFilter(input.value);
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        clearTimeout(debounceTimer);
        applyFilters(input.value);  // inmediato al apretar Enter
        const first = document.querySelector('.course-card:not(.hidden)');
        if (first) {
          // Offset dinámico del topnav + catnav (catnav puede tener 1 o 2 líneas)
          const navH = document.querySelector('.topnav')?.offsetHeight || 68;
          const catH = document.querySelector('.catnav')?.offsetHeight || 56;
          const offset = navH + catH + 8;
          window.scrollTo({ top: first.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
          first.style.transition = 'box-shadow 0.3s';
          first.style.boxShadow = '0 0 0 3px rgba(9,123,179,0.4)';
          setTimeout(() => { first.style.boxShadow = ''; }, 1200);
        }
      }
      if (e.key === 'Escape') {
        clearTimeout(debounceTimer);
        input.value = '';
        if (other) other.value = '';
        applyFilters('');
        input.blur();
      }
    });
  }
  bindInput(inputDesktop, inputMobile);
  bindInput(inputMobile, inputDesktop);
}


/* ============================================================
   initCatnav — scroll horizontal + flechas + active
============================================================ */
function initCatnav() {
  const scroll = document.getElementById('catnav-scroll');
  const btnLeft = document.getElementById('catnav-left');
  const btnRight = document.getElementById('catnav-right');
  if (!scroll) return;

  function updateArrows() {
    const atStart = scroll.scrollLeft <= 4;
    const atEnd = scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - 4;
    btnLeft?.classList.toggle('hidden', atStart);
    btnRight?.classList.toggle('hidden', atEnd);
  }

  scroll.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();

  btnLeft?.addEventListener('click', () => scroll.scrollBy({ left: -220, behavior: 'smooth' }));
  btnRight?.addEventListener('click', () => scroll.scrollBy({ left: 220, behavior: 'smooth' }));

  /* Drag-to-scroll (solo desktop) */
  if (!IS_TOUCH) {
    let isDown = false, startX = 0, startScrollLeft = 0;
    scroll.addEventListener('mousedown', e => {
      isDown = true;
      scroll.style.cursor = 'grabbing';
      startX = e.pageX - scroll.offsetLeft;
      startScrollLeft = scroll.scrollLeft;
    });
    scroll.addEventListener('mouseleave', () => { isDown = false; scroll.style.cursor = ''; });
    scroll.addEventListener('mouseup', () => { isDown = false; scroll.style.cursor = ''; });
    scroll.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      scroll.scrollLeft = startScrollLeft - (e.pageX - scroll.offsetLeft - startX) * 1.2;
    }, { passive: false });
  }

  /* Active link al scrollear */
  const catLinks = scroll.querySelectorAll('a[href^="#"]');
  const catSections = document.querySelectorAll('.category-block[id]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      catLinks.forEach(a => a.classList.remove('active'));
      const active = scroll.querySelector(`a[href="#${entry.target.id}"]`);
      if (!active) return;
      active.classList.add('active');
      if (!isScrollingToSection) {
        const linkLeft = active.offsetLeft;
        const linkWidth = active.offsetWidth;
        const scrollWidth = scroll.clientWidth;
        scroll.scrollLeft = linkLeft - scrollWidth / 2 + linkWidth / 2;
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  catSections.forEach(s => observer.observe(s));
}


/* ============================================================
   initStickyHeights — mide topnav + catnav y setea CSS vars
   Garantiza que scroll-margin-top sea correcto aunque el catnav
   tenga 1 o 2 líneas (depende del ancho de la pantalla).
============================================================ */
function initStickyHeights() {
  const topnav = document.querySelector('.topnav');
  const catnav = document.querySelector('.catnav');
  const root = document.documentElement;
  let resizeTimer = null;

  function update() {
    const navH = topnav?.offsetHeight || 68;
    const catH = catnav?.offsetHeight || 56;
    root.style.setProperty('--nav-h', navH + 'px');
    root.style.setProperty('--catnav-h', catH + 'px');
  }

  update();
  /* Recalcula cuando cambia el viewport: el catnav puede pasar
     de 2 líneas a 1 al ensanchar/angostar */
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(update, 100);
  });
}


/* ============================================================
   initNavActive — topnav active link al scrollear
============================================================ */
function initNavActive() {
  const links = document.querySelectorAll('.topnav-menu a[href^="#"]');
  const sections = Array.from(links)
    .map(a => document.getElementById(a.getAttribute('href').slice(1)))
    .filter(Boolean);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => a.classList.remove('active'));
      const match = document.querySelector(`.topnav-menu a[href="#${entry.target.id}"]`);
      if (match) match.classList.add('active');
    });
  }, { rootMargin: '-20% 0px -75% 0px' });

  sections.forEach(s => observer.observe(s));
}


/* ============================================================
   initAnimations — fade-in + contadores del hero
   (Los contadores ahora toman valores reales del array)
============================================================ */
function initAnimations() {
  /* Inyectar conteos reales en los contadores con data-count-source */
  document.querySelectorAll('.stat-counter[data-count-source]').forEach(el => {
    const src = el.dataset.countSource;
    if (src === 'cursos') el.dataset.count = String(CURSOS.length);
    if (src === 'categorias') el.dataset.count = String(CATEGORIAS.length);
  });

  /* Fade-in de secciones */
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      entry.target.style.animationDelay = (i * 0.04) + 's';
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.anim-fadein').forEach(el => fadeObserver.observe(el));

  /* Contadores animados del hero */
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const sep = el.dataset.separator || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1800;
    const start = performance.now();

    function fmt(n) {
      return sep
        ? prefix + Math.floor(n).toLocaleString('de-DE')
        : prefix + String(Math.floor(n));
    }

    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = fmt(target * ease);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(target);
    }
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.stat-counter').forEach(animateCounter);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.hero-stats-panel').forEach(el => counterObserver.observe(el));
}


/* ============================================================
   initScroll — progress bar + back-to-top  (con rAF)
============================================================ */
function initScroll() {
  const bar = document.getElementById('scroll-progress');
  const backTop = document.getElementById('backTop');
  let ticking = false;

  function update() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (total > 0 ? (scrolled / total * 100) : 0) + '%';
    if (backTop) backTop.classList.toggle('visible', scrolled > 600);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}


/* ============================================================
   initSmoothScroll — scroll suave universal
============================================================ */
let isScrollingToSection = false;

function initSmoothScroll() {
  function getOffset() {
    const navH = document.querySelector('.topnav')?.offsetHeight || 68;
    const catH = document.querySelector('.catnav')?.offsetHeight || 56;
    return navH + catH;
  }

  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href === '#' || href.length < 2) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    isScrollingToSection = true;
    const top = target.getBoundingClientRect().top + window.scrollY - getOffset();
    window.scrollTo({ top, behavior: 'smooth' });
    setTimeout(() => { isScrollingToSection = false; }, 700);
  });
}


/* ============================================================
   initImageFallback — placeholder gris si una imagen falla.
   Delegado para evitar onerror inline (CSP-friendly).
============================================================ */
function initImageFallback() {
  document.addEventListener('error', e => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement)) return;
    if (img.dataset.fallbackApplied === '1') return;
    img.dataset.fallbackApplied = '1';
    img.style.background = '#e4e8f0';
    img.removeAttribute('src');
  }, true);
}


/* ============================================================
   INICIALIZACIÓN
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  /* 1. Render del DOM dinámico (debe ir PRIMERO) */
  renderCatnav();
  renderIndex();
  renderCourses();

  /* 2. Comportamiento */
  initTheme();
  initMobileMenu();
  initModal();
  initSearch();
  initCatnav();
  initStickyHeights();
  initNavActive();
  initAnimations();
  initScroll();
  initSmoothScroll();
  initImageFallback();
});

/* ============================================================
   GOOGLE ANALYTICS 4 - EVENTOS PERSONALIZADOS
   ID: G-31Y26ZHHZZ
============================================================ */
function gaEvent(name, params) {
  if (typeof gtag === 'undefined') return;
  gtag('event', name, params);
}

function initAnalytics() {
  /* -- 1. Curso abierto en modal -- */
  document.addEventListener('click', e => {
    const card = e.target.closest('.course-card');
    if (!card) return;
    const id  = Number(card.dataset.cursoId);
    const c   = CURSOS[id];
    if (!c) return;
    const cat = CATEGORIAS.find(x => x.id === c.categoria);
    gaEvent('ver_curso', {
      course_name:     c.titulo,
      course_category: cat?.nombre || c.categoria,
    });
  });

  /* -- 2. Click en WhatsApp desde el modal -- */
  document.getElementById('modalWaBtn')?.addEventListener('click', () => {
    const title = document.getElementById('modalTitle')?.textContent?.trim();
    gaEvent('click_whatsapp', {
      course_name: title || 'desconocido',
      origen: 'modal',
    });
  });

  /* -- 3. Descarga del PDF -- */
  document.querySelectorAll('a[href*="catalogo.pdf"]').forEach(el => {
    el.addEventListener('click', () => {
      gaEvent('descargar_pdf', { metodo: 'link' });
    });
  });

  /* -- 4. Busqueda (desktop y mobile) -- */
  ['navSearch', 'mobileSearch'].forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;
    let timer;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const q = input.value.trim();
        if (q.length > 2) gaEvent('busqueda', { termino: q });
      }, 1000);
    });
  });

  /* -- 5. Navegacion por categorias (catnav) -- */
  document.querySelectorAll('.catnav-inner a').forEach(link => {
    link.addEventListener('click', () => {
      gaEvent('navegar_categoria', {
        categoria: link.textContent?.trim().replace(/^\S+\s*/, '') || link.dataset.cat
      });
    });
  });

  /* -- 6. Modo oscuro/claro -- */
  document.getElementById('darkFab')?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    gaEvent('cambiar_tema', { tema: isDark ? 'claro' : 'oscuro' });
  });
}

/* Inicializar analytics junto con el resto de la app */
document.addEventListener('DOMContentLoaded', initAnalytics);
