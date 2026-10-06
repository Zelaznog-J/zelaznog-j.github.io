# Proyectos

[← Volver al portafolio](https://zelaznog-j.github.io/)

Casos de análisis geoespacial con el razonamiento y las decisiones detrás de cada resultado, no solo el producto final.

## Área quemada y severidad del incendio Penco–Lirquén con Sentinel-2

Estimación de la superficie quemada y su severidad en enero de 2026 con escenas Sentinel-2 consultadas por STAC, dNBR corregido, umbral de Otsu y validación con focos VIIRS: 5 392 ha en la comuna de Penco. Python, xarray, Dask y GeoPandas.

[Ver resumen →](incendio-penco/index.md) · [Repositorio en GitHub](https://github.com/Zelaznog-J/incendio-penco-sentinel2)

## Precipitación en Chile 2000–2025 con ERA5

Agregación temporal y espacial de 26 años de precipitación diaria ERA5, con índices de extremos tipo ETCCDI y tendencias por zona y ciudad. Python, xarray, Dask y GeoPandas.

[Ver resumen →](precipitacion-era5/index.md) · [Repositorio en GitHub](https://github.com/Zelaznog-J/exploring-era5-chile)

## Temperatura en Chile 2000–2025 con ERA5

Agregación de 26 años de temperatura diaria ERA5 (media, máxima y mínima), con índices de extremos tipo ETCCDI, grados-día y tendencias por zona y ciudad. Python, xarray, Dask y flox.

[Ver resumen →](temperatura-era5/index.md) · [Repositorio en GitHub](https://github.com/Zelaznog-J/exploring-era5-chile)

## Límites administrativos de Chile con Overture Maps

Extracción de país, regiones, provincias y comunas desde Overture Maps, consultando GeoParquet en S3 con DuckDB y exportando por nivel a GeoJSON y GeoPackage. Python, DuckDB y GeoPandas.

[Ver resumen →](overture/index.md) · [Repositorio en GitHub](https://github.com/Zelaznog-J/adm_bounds_overture)
