<?php

/**
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 */
namespace OC\Tagging;

use OCP\AppFramework\Db\DoesNotExistException;
use OCP\AppFramework\Db\QBMapper;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;

/**
 * Mapper for Tag entity
 *
 * @template-extends QBMapper<Tag>
 */
class TagMapper extends QBMapper {
	/**
	 * Constructor.
	 *
	 * @param IDBConnection $db Instance of the Db abstraction layer.
	 */
	public function __construct(IDBConnection $db) {
		parent::__construct($db, 'vcategory', Tag::class);
	}

	/**
	 * Load tags from the database.
	 *
	 * @param array $owners The user(s) whose tags we are going to load.
	 * @param string $type The type of item for which we are loading tags.
	 * @return array An array of Tag objects.
	 */
	public function loadTags(array $owners, string $type): array {
		$qb = $this->db->getQueryBuilder();
		$qb->select(['id', 'uid', 'type', 'category'])
			->from($this->getTableName())
			->where($qb->expr()->in('uid', $qb->createNamedParameter($owners, IQueryBuilder::PARAM_STR_ARRAY)))
			->andWhere($qb->expr()->eq('type', $qb->createNamedParameter($type, IQueryBuilder::PARAM_STR)))
			->orderBy('category');
		return $this->findEntities($qb);
	}

	/**
	 * Check if a given Tag object already exists in the database.
	 *
	 * @param Tag $tag The tag to look for in the database.
	 */
	public function tagExists(Tag $tag): bool {
		$qb = $this->db->getQueryBuilder();
		$qb->select(['id', 'uid', 'type', 'category'])
			->from($this->getTableName())
			->where($qb->expr()->eq('uid', $qb->createNamedParameter($tag->getOwner(), IQueryBuilder::PARAM_STR)))
			->andWhere($qb->expr()->eq('type', $qb->createNamedParameter($tag->getType(), IQueryBuilder::PARAM_STR)))
			->andWhere($qb->expr()->eq('category', $qb->createNamedParameter($tag->getName(), IQueryBuilder::PARAM_STR)));
		try {
			$this->findEntity($qb);
		} catch (DoesNotExistException $e) {
			return false;
		}
		return true;
	}
}
