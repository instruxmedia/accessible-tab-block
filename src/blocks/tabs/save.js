// import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
const { RawHTML } = wp.element;

export default function save({ attributes }) {
	const {
		tabLabelsArray,
		customClass,
		anchorId,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `tb__tabs_accessible_tabs ` + customClass,
	});
	return (
		<div {...blockProps} id={anchorId ? anchorId : null}>
			<div
				className={`tb__tab-labels`}
				role="tablist"
			>
				{tabLabelsArray.map((label, i) => {
					return (
						<button
							key={i}
							className={
								i === 0
									? 'tb__tab-label active'
									: 'tb__tab-label'
							}
							role="tab"
							type="button"
							aria-selected={i === 0 ? 'true' : 'false'}
						>
							<RawHTML>{label}</RawHTML>
						</button>
					);
				})}
			</div>
			<div className="tb__tab-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
