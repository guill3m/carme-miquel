import Image from 'next/image'

import colors from '@/styles/colors.module.css'
import Grid from '@/components/grid'

import asideImg from '@/img/carme-miquel.jpg'

import styles from './page.module.css'

export default function AutoraPage() {
	return (
		<Grid
			className={colors.autora}
			title="L’autora"
			aside={<Image alt="" src={asideImg} />}
		>
			<p>
				Carme Miquel i Diego naix a La Nucia (Marina Baixa), si bé la major part
				de la seua vida ha transcorregut a la ciutat de València i en pobles de
				la Marina Alta i de l’Horta Sud. Filla de mestres d’escola, Carme ha
				exercit també aquesta professió durant vora trenta-nou anys. Al llarg de
				la seua trajectòria ha participat en diversos moviments professionals i
				sindicals. Ha sigut membre fundador de la CAPPEPV (Coordinadora
				d’Alumnes, Pares i Professors per l’Ensenyament Públic en Valencià) i de
				la Federació Escola Valenciana ocupant la presidència d’ambdues entitats
				durant tres anys.
			</p>
			<p>
				A més d’aquests moviments cívics relacionats amb l’ensenyament, d’altres
				moviments socials relacionats amb la defensa del territori i del medi
				ambient, han demanat també la seua atenció i la seua implicació.
			</p>
			<p>
				Amb tot, ha compaginat l’activitat professional i cívica amb
				l’escriptura, que dirigeix tant a infants i joves com a lectors adults.
				Ha realitzat escrits de caràcter divulgatiu i didàctic i també
				narracións literàries i obres d’assaig. L’any 1997 rep el premi Samaruc
				dels bibliotecaris valencians pel llibre <strong>A cau d’orella</strong>
				. El 1998 rep el premi de Novel·la ciutat d’Alzira amb{' '}
				<strong>Aigua en cistella</strong>.
			</p>
			<p>
				Com articulista d’opinió té una llarga trajectòria havent col·laborat en
				diversos mitjans. De manera periòdica ho ha fet en la revista All-i-Oli
				del Sindicat de Treballadors de l’Ensenyament on ha publicat un article
				mensual durant quatre anys. I setmanalment des de l’any 1998, cada
				dimarts publica una columna a la pàgina “Panorama” del diari{' '}
				<em>Levante EMV</em> de València. En total comptabilitza més d’un miler
				d’articles.
			</p>
			<div className={styles.alternate}>
				<h2>Ella ha dit…</h2>
				<p>
					Recorde una ciutat de València de primeries dels anys 50 on encara es
					podia jugar al carrer. Recorde el camí de casa a l’escola per la
					ciutat antiga, carrer de Carnissers, carrer Quart, La Bosseria, de
					vegades el Mercat Central.
				</p>
				<p>
					L’escola era una escola vella, en un pis vell. Sense pati, sense llum.
					Es deia «Grupo Escolar Carolina Álvarez», estava per la plaça de Sant
					Nicolàs i allà ma mare feia de mestra. El meu pare va ser mestre del
					«Grupo Escolar Cervantes», així és que la meua germana primer i jo
					després vam seguir el mateix camí professional.
				</p>
				<p>
					La vida a València es compaginava amb les vacances a Gata. Les
					vivències en aquell poble de la Marina eren plaents. Són aquelles que
					queden per sempre.
				</p>
				<p>
					Amb una beca faig el Batxillerat elemental en les «Madres Escolapias»,
					i tot seguit, Magisteri. Malgrat el desert cultural i cívic del
					moment, m’arriba un cert ambient de recuperació i inquietuds a través
					del meu germà, que estudiava a la Universitat. I també a través d’ell
					conec el Ferran Zurriaga. Amb Ferran al cap i amb Pilar Calatayud,
					Enric Alcorissa, Adela Costa, Vicent Moliner, Tere Picher, i altres
					companys i companyes, comença a funcionar la Secció de Pedagogia de Lo
					Rat Penat. Som autodidactes, ens formem i aprenem allò que els estudis
					oficials ens havien negat. Constituïm el primer MRP (Moviment de
					Renovació Pedagògica) de la postguerra.
				</p>
				<p>
					Faig de mestra a Tavernes de la Valldigna, a Torrent –on conec el
					Jaume–, a València i a Alcàsser.
				</p>
				<p>I de tant en tant, escric cosetes.</p>
				<p>
					La CAPPEPV i la Federació Escola Valenciana són els moviments cívics
					que m’enganxen darrerament. Hi treballem amb optimisme i sentit
					positiu pels objectius que ens uneixen. Un goig!
				</p>
				<p>
					I de tant en tant, escric cosetes que dedique a les meues filles,
					Roser i Mireia, i a la gent de la seua generació.
				</p>
			</div>
			<p>
				<small>(All-i-Oli, novembre 1997, núm. 123)</small>
			</p>
		</Grid>
	)
}